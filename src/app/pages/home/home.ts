import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  // --- Eredeti Topikok ---
  topics = [
    {
      id: 1,
      title: 'Topic 1: Introduction to the Body',
      description: 'Master anatomical terms, medical collocations, and common healthcare idioms.',
      icon: '🩺',
      color: '#6366f1',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Topic 2',
      description: 'Advanced physiological systems and patient communication modules.',
      icon: '🚧',
      color: '#94a3b8',
      isAvailable: false,
    },
    {
      id: 3,
      title: 'Topic 3',
      description: 'Clinical terminology and diagnostic reporting procedures.',
      icon: '🚧',
      color: '#94a3b8',
      isAvailable: false,
    },
    {
      id: 4,
      title: 'Topic 4',
      description: 'Pharmacological basics and medical ethics discussion.',
      icon: '🚧',
      color: '#94a3b8',
      isAvailable: false,
    },
  ];

  // --- ÚJ: Szavazás adatai (Mentimeter alapján) ---
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
  isVoteSubmitted = false; // Elrejtjük, ha már kész

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

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

  // --- Eredeti navigáció ---
  openTopic(id: number) {
    this.router.navigate(['/topic', id]);
  }
  onOpenShop() {
    console.log('Shop... (Under dev)');
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
