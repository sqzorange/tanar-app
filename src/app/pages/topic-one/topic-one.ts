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

  openTask(type: string, taskId: number | string) {
    this.router.navigate(['/task', type, taskId]);
  }

  // --- ÚJ: Felolvasó funkció ---
  playSound(text: string) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Orvosi angol kiejtéshez
      utterance.rate = 0.9; // Picit lassabb, hogy jól érthető legyen
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sajnos a böngésződ nem támogatja a felolvasást.');
    }
  }
}
