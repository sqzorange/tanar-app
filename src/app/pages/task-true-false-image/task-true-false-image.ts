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

  userAnswers: { [index: number]: boolean | null } = {};
  gradingResults: { [index: number]: 'correct' | 'incorrect' } | null = null;

  isEvaluated = false;
  score = 0; // Eltalált válaszok száma
  showAnswers = false; // Mutassuk-e a helyes megoldást

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');
      if (taskId && TRUE_FALSE_IMAGE_DATABASE[taskId]) {
        this.currentTask = TRUE_FALSE_IMAGE_DATABASE[taskId];
        this.currentTask.questions.forEach((_, i) => (this.userAnswers[i] = null));
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  selectAnswer(index: number, answer: boolean): void {
    if (this.isEvaluated) return;
    this.userAnswers[index] = answer;
  }

  allQuestionsAnswered(): boolean {
    if (!this.currentTask) return false;
    return Object.values(this.userAnswers).every((answer) => answer !== null);
  }

  submitTask(): void {
    if (!this.currentTask || !this.allQuestionsAnswered()) return;

    this.gradingResults = {};
    this.score = 0;
    this.showAnswers = false; // Újraértékelésnél elrejtjük a hinteket

    this.currentTask.questions.forEach((q: TrueFalseQuestion, i: number) => {
      if (this.userAnswers[i] === q.correctAnswer) {
        this.gradingResults![i] = 'correct';
        this.score++;
      } else {
        this.gradingResults![i] = 'incorrect';
      }
    });

    this.isEvaluated = true;
  }

  toggleAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }

  retryTask(): void {
    this.isEvaluated = false;
    this.gradingResults = null;
    this.score = 0;
    this.showAnswers = false;
    this.currentTask.questions.forEach((_, i) => (this.userAnswers[i] = null));
  }
}
