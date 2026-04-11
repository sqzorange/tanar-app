// src/app/pages/topic-two/topic-two.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-two.html', // Ellenőrizd, hogy ez a pontos fájlneved!
  styleUrl: './topic-two.scss',
})
export class TopicTwoComponent {
  constructor(private router: Router) {}

  // Ez a metódus felel a feladatok megnyitásáért
  openTask(type: string, taskId: string | number) {
    this.router.navigate(['/task', type, taskId]);
  }

  // Ez pedig a visszalépésért a főoldalra
  goBack() {
    this.router.navigate(['/home']);
  }

  // Később ide jöhet a playSound metódus is a TTS-hez, ha szeretnéd
}
