import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-one.html',
  styleUrl: './topic-one.scss',
})
export class TopicOneComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  // A paramétereket kiegészítjük a típussal is
  openTask(type: string, taskId: number | string) {
    this.router.navigate(['/task', type, taskId]);
  }
}
