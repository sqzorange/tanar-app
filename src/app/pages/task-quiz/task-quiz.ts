import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QUIZ_DATABASE, QuizTask } from '../../taskData/tasks-data';

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

  // A felhasználó válaszainak indexeit tároljuk
  userAnswers: number[] = [];

  // Egységesített értékelő változók
  score = 0;
  isEvaluated = false;
  showAnswers = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && QUIZ_DATABASE[id]) {
      this.currentTask = QUIZ_DATABASE[id];
    } else {
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
    if (this.selectedOptionIndex !== null) {
      // Elmentjük a választást
      this.userAnswers[this.currentQuestionIndex] = this.selectedOptionIndex;

      // Pontozás
      if (this.selectedOptionIndex === this.currentQuestion.correctIndex) {
        this.score++;
      }
    }

    this.selectedOptionIndex = null; // Visszaállítjuk a következő kérdéshez

    // Ha van még kérdés, lépünk, ha nincs, lezárjuk és értékelünk
    if (this.currentQuestionIndex < this.currentTask.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isEvaluated = true;
      if (this.score === this.currentTask.questions.length) {
        setTimeout(() => alert('Perfect score! Well done! 🏆'), 300);
      }
    }
  }

  toggleAnswers() {
    this.showAnswers = !this.showAnswers;
  }

  retryTask() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isEvaluated = false;
    this.showAnswers = false;
    this.userAnswers = [];
    this.selectedOptionIndex = null;
  }

  goBack() {
    this.location.back();
  }
}
