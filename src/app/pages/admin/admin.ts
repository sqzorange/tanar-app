import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Ezt is be kellett importálni!
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem, // <-- Ez kell a diákok áthelyezéséhez
} from '@angular/cdk/drag-drop';
import { AuthService } from '../../services/auth';
import { ALL_TOPICS } from '../../config/topics-config';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class AdminComponent implements OnInit {
  // --- Állapotváltozók ---
  availableTopics = ALL_TOPICS;
  allStudents: any[] = [];
  unassignedStudents: any[] = [];
  groups: any[] = [];

  newGroupName: string = '';
  selectedGroupId: string | null = null; // Nyilvántartja, melyik csoport van "kinyitva"
  sortOrder: 'asc' | 'desc' = 'desc';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // 1. Először lekérjük az összes felhasználót
    this.http.get<any[]>('http://localhost:3000/users').subscribe((users) => {
      this.allStudents = users.filter((u) => u.role === 'student');

      // 2. Utána lekérjük a csoportokat
      this.http.get<any[]>('http://localhost:3000/groups').subscribe((groups) => {
        // Összepárosítjuk a Csoportokat a valós adatokkal (hogy a HTML-ben a nevek jelenjenek meg)
        this.groups = groups.map((g) => {
          g.studentList = (g.studentIds || [])
            .map((id: any) => this.allStudents.find((s) => s.id === id))
            .filter((s: any) => s !== undefined);

          g.topicList = (g.topicIds || [])
            .map((id: number) => this.availableTopics.find((t) => t.id === id))
            .filter((t: any) => t !== undefined);

          return g;
        });

        // 3. Kiszűrjük azokat a diákokat, akik még nincsenek egyetlen csoportban sem
        const assignedStudentIds = new Set(this.groups.flatMap((g) => g.studentIds));
        this.unassignedStudents = this.allStudents.filter((s) => !assignedStudentIds.has(s.id));

        this.sortUnassignedStudents();
        this.cdr.detectChanges();
      });
    });
  }

  // --- Csoportkezelés ---
  addGroup() {
    if (!this.newGroupName.trim()) return;
    const newGroup = {
      id: 'group_' + Date.now(), // Egyedi azonosító generálása
      name: this.newGroupName,
      studentIds: [],
      topicIds: [],
    };
    this.http.post('http://localhost:3000/groups', newGroup).subscribe(() => {
      this.newGroupName = '';
      this.loadData();
    });
  }

  deleteGroup(groupId: string) {
    if (confirm('Biztosan törlöd ezt a csoportot? A benne lévő diákok visszakerülnek a listába.')) {
      this.http.delete(`http://localhost:3000/groups/${groupId}`).subscribe(() => {
        this.loadData(); // Újratöltés helyreteszi a diákokat
      });
    }
  }

  toggleGroup(groupId: string) {
    // Kinyitja/Becsukja a csoportot harmonika szerűen
    this.selectedGroupId = this.selectedGroupId === groupId ? null : groupId;
  }

  // --- Rendezés (A beosztatlan diákokra) ---
  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortUnassignedStudents();
  }

  private sortUnassignedStudents() {
    this.unassignedStudents.sort((a, b) => {
      const dateA = a.metadata?.registeredAt ? new Date(a.metadata.registeredAt).getTime() : 0;
      const dateB = b.metadata?.registeredAt ? new Date(b.metadata.registeredAt).getTime() : 0;
      return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  // --- DRAG AND DROP LOGIKA ---

  getStudentDropLists(): string[] {
    return this.groups.map((g) => 'group-students-' + g.id);
  }
  getTopicDropLists(): string[] {
    return this.groups.map((g) => 'group-topics-' + g.id);
  }
  dropStudent(event: CdkDragDrop<any[]>, group: any) {
    if (event.previousContainer !== event.container) {
      // Átmozgatjuk a diákot a beosztatlanok közül a csoportba
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.syncGroupToDatabase(group);
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  dropTopic(event: CdkDragDrop<any[]>, group: any) {
    if (event.previousContainer !== event.container) {
      const topic = event.previousContainer.data[event.previousIndex];
      // Csak akkor másoljuk, ha még nincs benne a csoportban
      if (!event.container.data.find((t: any) => t.id === topic.id)) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.syncGroupToDatabase(group);
      }
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  // --- Eltávolítás a csoportból ---

  removeStudent(group: any, index: number) {
    const removedStudent = group.studentList.splice(index, 1)[0];
    this.unassignedStudents.push(removedStudent);
    this.sortUnassignedStudents();

    // Ha kiveszünk egy diákot, megvonjuk tőle a csoport témáit!
    this.http
      .patch(`http://localhost:3000/users/${removedStudent.id}`, { assignedTopics: [] })
      .subscribe();
    this.syncGroupToDatabase(group);
  }

  removeTopic(group: any, index: number) {
    group.topicList.splice(index, 1);
    this.syncGroupToDatabase(group);
  }

  // --- LIVE SYNC: Mentés és Szinkronizáció ---
  // Ez a legfontosabb rész: Elmenti a csoportot, és rámenti a témákat a diákokra!
  syncGroupToDatabase(group: any) {
    group.studentIds = group.studentList.map((s: any) => s.id);
    group.topicIds = group.topicList.map((t: any) => t.id);

    // 1. Mentjük a Csoportot
    this.http
      .patch(`http://localhost:3000/groups/${group.id}`, {
        studentIds: group.studentIds,
        topicIds: group.topicIds,
      })
      .subscribe(() => {
        // 2. Szinkronizáljuk a témákat az összes diákkal, aki a csoportban van
        group.studentIds.forEach((studentId: any) => {
          this.http
            .patch(`http://localhost:3000/users/${studentId}`, {
              assignedTopics: group.topicIds,
            })
            .subscribe();
        });
      });
  }

  // --- Navigáció ---
  goToHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
