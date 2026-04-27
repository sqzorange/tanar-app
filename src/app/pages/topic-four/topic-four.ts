import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic-four',
  templateUrl: './topic-four.html',
  styleUrls: ['./topic-four.scss'],
})
export class TopicFourComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }

  openTask(taskType: string, taskId: number): void {
    console.log(`Opening ${taskType} task with ID: ${taskId}`);
  }

  playSound(text: string): void {
    console.log(`Playing sound for: ${text}`);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Text-to-speech is not supported in this browser.');
    }
  }
}
