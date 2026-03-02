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
  units = [
    {
      id: 1,
      title: 'Bemelegítés',
      description: 'Szótáras játék indításként',
      icon: '🧠',
      color: '#3b82f6',
    },
    {
      id: 8,
      title: '8. Egység - Összegzés',
      description: 'Keresztrejtvény (Crossword)',
      icon: '🧩',
      color: '#10b981',
    },
    {
      id: 9,
      title: '9. Egység - Képes szavazás',
      description: '9 opcióból 5 kiválasztása',
      icon: '🖼️',
      color: '#f59e0b',
    },
    {
      id: 10,
      title: '10-11. Egység - Kvíz',
      description: 'Nyelvtani fókusz és interaktív elemek',
      icon: '📝',
      color: '#8b5cf6',
    },
    {
      id: 13,
      title: '13. Egység - Szövegdobozos',
      description: 'Kitalálós és választós feladat',
      icon: '💬',
      color: '#ec4899',
    },
    {
      id: 14,
      title: 'Multimédia',
      description: 'Videó a testrészekről + 5 kérdés',
      icon: '📺',
      color: '#ef4444',
    },
  ];

  startTask(id: number) {
    this.router.navigate(['/task', id]);
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
