import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QUIZ_DATABASE, QuizTask } from '../../taskData/tasks-data'; // Importáld a megfelelő útvonalról!

@Component({
  selector: 'app-task-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-quiz.html',
  styleUrl: './task-quiz.scss',
})
export class TaskQuizComponent implements OnInit {
  currentTask!: QuizTask;
  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;
  isQuizFinished = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    // Kiolvassuk az ID-t az URL-ből (pl. /task/quiz/10 -> id = '10')
    const id = this.route.snapshot.paramMap.get('id');

    // Ha van ilyen ID az adatbázisunkban, betöltjük
    if (id && QUIZ_DATABASE[id]) {
      this.currentTask = QUIZ_DATABASE[id];
    } else {
      // Ha érvénytelen az ID, visszadobjuk az előző oldalra
      console.error('Quiz task not found!');
      this.location.back();
    }
  }

  get currentQuestion() {
    return this.currentTask.questions[this.currentQuestionIndex];
  }

  selectOption(i: number) {
    this.selectedOptionIndex = i;
  }

  nextQuestion() {
    if (this.selectedOptionIndex === this.currentQuestion.correctIndex) {
      this.score++;
    }
    this.selectedOptionIndex = null;
    if (this.currentQuestionIndex < this.currentTask.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isQuizFinished = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isQuizFinished = false;
  }

  goBack() {
    this.location.back();
  }
}
