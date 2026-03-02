import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router'; // <-- ÚJ: ActivatedRoute
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

// Definiáljuk, hogyan kell kinéznie egy feladat adatainak
interface DragDropTask {
  title: string;
  instruction: string;
  availableOptions: string[];
  correctAnswers: string[];
  requiredCount: number;
}

@Component({
  selector: 'app-task-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-drag-drop.html',
  styleUrl: './task-drag-drop.scss',
})
export class TaskDragDropComponent implements OnInit {
  // AZ UNIVERZÁLIS ADATBÁZIS: Ide jöhet az összes jövőbeli drag-drop feladatod!
  taskDatabase: { [key: string]: DragDropTask } = {
    '9': {
      title: 'Head and Neck (Fej és Nyak)',
      instruction:
        'A listában 9 anatómai kifejezést látsz. Húzd be azt az 5 testrészt a jobb oldali dobozba, amelyik a fejhez vagy a nyakhoz tartozik!',
      availableOptions: [
        'Zygoma (Cheekbone)',
        'Axilla (Armpit)',
        'Mandible (Lower jaw)',
        'Fibula (Calf bone)',
        "Adam's apple",
        'Forehead',
        'Umbilicus (Navel)',
        'Mentum (Chin)',
        'Carpus (Wrist)',
      ],
      correctAnswers: [
        'Zygoma (Cheekbone)',
        'Mandible (Lower jaw)',
        "Adam's apple",
        'Forehead',
        'Mentum (Chin)',
      ],
      requiredCount: 5,
    },
    // Példa egy JÖVŐBELI feladatra (akár a Topic 2-höz)
    '15': {
      title: 'The Limbs (Végtagok)',
      instruction: 'Húzd be pontosan a 4 végtagokhoz tartozó csontot!',
      availableOptions: ['Scapula', 'Costae', 'Femur', 'Abdomen', 'Fibula', 'Hallux'],
      correctAnswers: ['Scapula', 'Femur', 'Fibula', 'Hallux'],
      requiredCount: 4,
    },
  };

  currentTask!: DragDropTask; // Az éppen aktuális feladat
  availableOptions: string[] = [];
  selectedOptions: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute, // Ezzel olvassuk ki az URL-t
    private location: Location,
  ) {}

  ngOnInit() {
    // Kiolvassuk az ID-t az URL-ből (pl. /task/dragdrop/9 -> '9')
    const taskId = this.route.snapshot.paramMap.get('id');

    if (taskId && this.taskDatabase[taskId]) {
      this.currentTask = this.taskDatabase[taskId];
      // Klónozzuk a tömböt, hogy az adatbázis ne módosuljon a húzogatástól
      this.availableOptions = [...this.currentTask.availableOptions];
    } else {
      alert('A feladat nem található!');
      this.location.back();
    }
  }

  // Dinamikusan ellenőrzi a limitet az 5 helyett
  maxAllowedItems = (drag: CdkDrag, drop: CdkDropList) => {
    return this.selectedOptions.length < this.currentTask.requiredCount;
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  submitTask() {
    // Dinamikus ellenőrzés
    const isPerfect =
      this.selectedOptions.every((option) => this.currentTask.correctAnswers.includes(option)) &&
      this.selectedOptions.length === this.currentTask.requiredCount;

    if (isPerfect) {
      alert('Tökéletes munka! 🏆');
      this.location.back();
    } else {
      alert('Sajnos van benne hiba! ❌ Próbáld újra!');
      this.availableOptions.push(...this.selectedOptions);
      this.selectedOptions = [];
    }
  }

  goBack() {
    this.location.back();
  }
}
