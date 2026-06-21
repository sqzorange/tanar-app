import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-three.html',
  styleUrl: './topic-three.scss',
})
export class TopicThreeComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  // A gombok ezt a metódust hívják, hogy megnyissák az adott feladatot a projektben
  openTask(type: string, taskId: number | string) {
    this.router.navigate(['/task', type, taskId]);
  }

  // Felolvasó funkció
  playSound(text: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;

      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Sajnos a böngésződ nem támogatja a felolvasást (Text-to-Speech).');
    }
  }
  printPage() {
    window.print();
  }
}
