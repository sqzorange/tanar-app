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
  // 4 Main Topics
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

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  openTopic(id: number) {
    this.router.navigate(['/topic', id]);
  }

  onOpenShop() {
    console.log('Opening Shop... (Feature under development)');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
