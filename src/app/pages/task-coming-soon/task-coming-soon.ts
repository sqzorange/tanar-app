import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-coming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-coming-soon.html',
  styleUrl: './task-coming-soon.scss',
})
export class TaskComingSoonComponent {
  taskId: string | null = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.taskId = this.route.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
