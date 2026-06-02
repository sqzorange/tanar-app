import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// A feladatok adatai (ellenőrizd az elérési utat!)
import { topic1DragDrop, topic1Quiz } from '../../taskData/topic-1-data';

@Component({
  selector: 'app-topic-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-one.html',
  styleUrl: './topic-one.scss',
})
export class TopicOneComponent {
  // Adatok a nyomtatható feladatlapokhoz
  dragDropData: any = topic1DragDrop;
  quizData: any = topic1Quiz;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  openTask(type: string, taskId: number | string) {
    this.router.navigate(['/task', type, taskId]);
  }

  playSound(text: string) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sajnos a böngésződ nem támogatja a felolvasást.');
    }
  }

  printPage() {
    window.print();
  }

  // Segédfüggvény a táblázatos feladatok helyes válaszaihoz
  getDropAnswer(cellValue: string, dropZones: any[]): string {
    if (!dropZones) return '';
    const zone = dropZones.find((z: any) => z.label === cellValue);
    return zone ? zone.correctAnswer : '';
  }
}
