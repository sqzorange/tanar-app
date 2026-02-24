import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  subjects = [
    { title: 'Matematika', icon: '📐', color: '#3b82f6', lessons: 12 },
    { title: 'Informatika', icon: '💻', color: '#10b981', lessons: 8 },
    { title: 'Fizika', icon: '⚡', color: '#f59e0b', lessons: 15 },
  ];
}
