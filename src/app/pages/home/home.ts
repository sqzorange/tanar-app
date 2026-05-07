// src/app/pages/home/home.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth';
import { ALL_TOPICS, TopicMeta } from '../../config/topics-config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  // --- Dinamikus témák és állapotok ---
  topics: TopicMeta[] = [];
  username: string = '';
  loading: boolean = true;
  isAdmin: boolean = false;

  // --- Szavazás adatai ---
  voteOptions = [
    { id: 1, text: 'Egészség, betegség, panaszok' },
    { id: 2, text: 'Testrészek, szervrendszerek' },
    { id: 3, text: 'Fogorvosképzés hazánkban és külföldön' },
    { id: 4, text: 'Az egészségügyi ellátók, munkakörök' },
    { id: 5, text: 'Szak- és továbbképzés hazánkban és külföldön' },
    { id: 6, text: 'Tananyagok feldolgozása, kivonatolás, tömörítés, tanulási technikák' },
    { id: 7, text: 'ppt, prezi... kiselőadások módszertana' },
    { id: 8, text: 'Jegyzetelési technikák, olvasott szövegértés' },
    { id: 9, text: 'Jegyzetelési technikák, hallott szövegértés' },
  ];

  selectedVoteIds: number[] = [];
  isVoteSubmitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private cdr: ChangeDetectorRef, // <-- Változásérzékelő az azonnali frissítéshez
  ) {}

  ngOnInit() {
    // 1. Felhasználó adatainak betöltése a sessionből
    const currentUser = this.authService.getCurrentUser();

    // Debug infó a konzolra
    console.log('Aktuális user a sessionben:', currentUser);

    if (currentUser && currentUser.id) {
      this.username = currentUser.username || 'Student';
      this.isAdmin = currentUser.role === 'admin';

      this.http.get<any>(`http://localhost:3000/users/${currentUser.id}`).subscribe({
        next: (user) => {
          this.username = user.username;

          console.log('Adatok megérkeztek a szervertől:', user);
          if (this.isAdmin) {
            this.topics = ALL_TOPICS;
          } else {
            // Ha diák, akkor csak a ráosztottakat
            const assignedIds = user.assignedTopics || [];
            this.topics = ALL_TOPICS.filter((t) => assignedIds.map(Number).includes(Number(t.id)));
          }

          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Hiba az adatok lekérésekor:', err);
          this.loading = false;
          this.cdr.detectChanges();
        },
      });
    } else {
      console.error('Nincs bejelentkezett felhasználó vagy hiányzik az ID!');
      this.loading = false;
    }
  }

  // --- Szavazás Logika ---
  toggleVote(id: number) {
    const index = this.selectedVoteIds.indexOf(id);
    if (index > -1) {
      this.selectedVoteIds.splice(index, 1);
    } else if (this.selectedVoteIds.length < 5) {
      this.selectedVoteIds.push(id);
    }
  }

  isVoteSelected(id: number): boolean {
    return this.selectedVoteIds.includes(id);
  }

  submitVote() {
    if (this.selectedVoteIds.length === 5) {
      this.isVoteSubmitted = true;
      alert('Köszönjük a prioritások beállítását! 🗳️');
    }
  }

  // --- Navigáció ---
  openTopic(id: number) {
    // Emlékezz: A topics-config.ts-ben levő route adja meg a pontos útvonalat
    // VAGY ha id alapján megy a routingod, akkor ez így jó marad:
    this.router.navigate(['/topic', id]);
  }

  onOpenShop() {
    console.log('Shop... (Under dev)');
  }
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
