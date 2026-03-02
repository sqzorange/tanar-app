import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-quiz.html',
  styleUrl: './task-quiz.scss',
})
export class TaskQuizComponent {
  questions = [
    {
      text: 'Melyik a helyes mondat? (Grammar Focus)',
      options: ['I has a dog.', 'I have a dog.', 'I haves a dog.'],
      correctIndex: 1,
    },
    {
      text: 'Mit jelent a "Bemelegítés" szó az IT világában?',
      options: ['A gép túlmelegedése', 'Ráhangolódó feladat', 'Kábelek csatlakoztatása'],
      correctIndex: 1,
    },
    {
      text: 'Válaszd ki a kakukktojást!',
      options: ['Keresztrejtvény', 'Kvíz', 'Alaplap'],
      correctIndex: 2,
    },
  ];

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;
  isQuizFinished = false;

  constructor(private router: Router) {}

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(index: number) {
    this.selectedOptionIndex = index;
  }

  nextQuestion() {
    if (this.selectedOptionIndex === null) return;
    if (this.selectedOptionIndex === this.currentQuestion.correctIndex) {
      this.score++;
    }
    this.selectedOptionIndex = null;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isQuizFinished = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedOptionIndex = null;
    this.score = 0;
    this.isQuizFinished = false;
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
