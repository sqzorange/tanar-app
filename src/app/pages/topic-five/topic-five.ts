import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-five.html',
  styleUrl: './topic-five.scss',
})
export class TopicFiveComponent {
  constructor(
    private router: Router,
    private location: Location,
  ) {}

  goBack() {
    this.location.back();
  }

  openTask(taskType: string, taskId: string) {
    this.router.navigate([`/task/${taskType}/${taskId}`]);
  }

  speak(text: string) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }
}
