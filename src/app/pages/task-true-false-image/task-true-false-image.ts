import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  TRUE_FALSE_IMAGE_DATABASE,
  TrueFalseImageTask,
  TrueFalseQuestion,
} from '../../taskData/tasks-data';

@Component({
  selector: 'app-task-true-false-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-true-false-image.html',
  styleUrls: ['./task-true-false-image.scss'],
})
export class TaskTrueFalseImageComponent implements OnInit {
  currentTask!: TrueFalseImageTask;

  // A felhasználó válaszai: null (még nem válaszolt), true (Yes), false (No)
  userAnswers: { [index: number]: boolean | null } = {};

  // Értékelés után: 'correct' vagy 'incorrect'
  gradingResults: { [index: number]: 'correct' | 'incorrect' } | null = null;
  isEvaluated = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');
      if (taskId && TRUE_FALSE_IMAGE_DATABASE[taskId]) {
        this.currentTask = TRUE_FALSE_IMAGE_DATABASE[taskId];

        // Inicializáljuk a válaszokat null-ra
        this.currentTask.questions.forEach((_, i) => (this.userAnswers[i] = null));
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  selectAnswer(index: number, answer: boolean): void {
    if (this.isEvaluated) return; // Ha már kiértékeltük, nem lehet változtatni
    this.userAnswers[index] = answer;
  }

  // Megnézzük, hogy minden kérdésre válaszolt-e
  allQuestionsAnswered(): boolean {
    if (!this.currentTask) return false;
    return Object.values(this.userAnswers).every((answer) => answer !== null);
  }

  submitTask(): void {
    if (!this.currentTask || !this.allQuestionsAnswered()) return;

    this.gradingResults = {};
    let allCorrect = true;

    // Helyi (kliens oldali) kiértékelés AI nélkül
    this.currentTask.questions.forEach((q: TrueFalseQuestion, i: number) => {
      if (this.userAnswers[i] === q.correctAnswer) {
        this.gradingResults![i] = 'correct';
      } else {
        this.gradingResults![i] = 'incorrect';
        allCorrect = false;
      }
    });

    this.isEvaluated = true;

    if (allCorrect) {
      setTimeout(() => alert('Perfect score! Well done! 🏆'), 300);
    }
  }
}
