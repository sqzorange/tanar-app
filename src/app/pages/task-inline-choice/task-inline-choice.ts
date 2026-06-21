import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { INLINE_CHOICE_DATABASE, InlineChoiceTask } from '../../taskData/tasks-data';

@Component({
  selector: 'app-task-inline-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-inline-choice.html',
  styleUrl: './task-inline-choice.scss',
})
export class TaskInlineChoiceComponent implements OnInit {
  currentTask!: InlineChoiceTask;

  // Válaszok tárolása: null (még nincs válasz) vagy a kiválasztott string
  selectedAnswers: { [sentenceIndex: number]: string | null } = {};

  // Értékelés állapota
  gradingResults: { [index: number]: 'correct' | 'incorrect' } | null = null;
  isEvaluated = false;
  score = 0;
  showAnswers = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && INLINE_CHOICE_DATABASE[id]) {
      this.currentTask = INLINE_CHOICE_DATABASE[id];
      // Inicializáljuk a válaszokat
      this.currentTask.sentences.forEach((_, i) => (this.selectedAnswers[i] = null));
    } else {
      console.error('Inline Choice task not found!');
      this.location.back();
    }
  }

  selectOption(sentenceIndex: number, option: string) {
    if (this.isEvaluated) return; // Ha már értékeltük, ne lehessen kattintani
    this.selectedAnswers[sentenceIndex] = option;
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return Object.values(this.selectedAnswers).every((answer) => answer !== null);
  }

  submitTask() {
    if (!this.currentTask || !this.isAllAnswered()) return;

    this.gradingResults = {};
    this.score = 0;
    this.showAnswers = false;
    let allCorrect = true;

    this.currentTask.sentences.forEach((sentence, index) => {
      if (this.selectedAnswers[index] === sentence.correctAnswer) {
        this.gradingResults![index] = 'correct';
        this.score++;
      } else {
        this.gradingResults![index] = 'incorrect';
        allCorrect = false;
      }
    });

    this.isEvaluated = true;

    if (allCorrect) {
      setTimeout(() => alert('Perfect score! Well done! 🏆'), 300);
    }
  }

  toggleAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }

  retryTask(): void {
    this.isEvaluated = false;
    this.gradingResults = null;
    this.score = 0;
    this.showAnswers = false;
    this.currentTask.sentences.forEach((_, i) => (this.selectedAnswers[i] = null));
  }

  goBack() {
    this.location.back();
  }
}
