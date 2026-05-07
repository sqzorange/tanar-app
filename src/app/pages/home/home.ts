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
      id: 2, // Ez az ID fogja meghatározni a routingot
      title: 'Topic 2: Health and Illness', // A PDF címe
      description:
        'Learn how to ask about health, describe recovery, and use medical idioms correctly.',
      icon: '🤒', // Átírtam az ikont
      color: '#f59e0b', // Narancssárga téma
      isAvailable: true, // Ezt állítsd TRUE-ra, hogy kattintható legyen!
    },
    {
      id: 3,
      title: 'Topic 3: Body Systems, Digestion & Nutrition',
      description:
        'Explore the major systems of the human body, their functions, and medical terminology.',
      icon: '🫁',
      color: '#10b981',
      isAvailable: true,
    },
    {
      id: 4,
      title: 'Topic 4: Dental Education',
      description:
        'Explore dental studies, university structure, international degrees, and academic vocabulary.',
      icon: '🦷',
      color: '#8b5cf6',
      isAvailable: true,
    },
    {
      id: 5,
      title: 'Topic 5: People in Dentistry',
      description:
        'Explore the dental team, practice types, and specializations in modern dentistry.',
      icon: '🦷',
      color: '#6137cd',
      isAvailable: true,
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
