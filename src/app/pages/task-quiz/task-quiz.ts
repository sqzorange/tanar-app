import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface QuizTask {
  title: string;
  questions: { text: string; options: string[]; correctIndex: number }[];
}

@Component({
  selector: 'app-task-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-quiz.html',
  styleUrl: './task-quiz.scss',
})
export class TaskQuizComponent implements OnInit {
  taskDatabase: { [key: string]: QuizTask } = {
    '10': {
      title: 'Grammar Focus: Collocations',
      questions: [
        {
          text: 'Complete: "The ___ of the tongue"',
          options: ['Tip', 'Sole', 'Nape'],
          correctIndex: 0,
        }, // [cite: 85]
        {
          text: 'Medical term for "Adam\'s apple"?',
          options: ['Zygoma', 'Mandibula', 'Laryngeal prominence'],
          correctIndex: 2,
        }, // [cite: 26, 44]
        {
          text: 'Complete: "The ___ of the foot"',
          options: ['Nape', 'Sole', 'Palm'],
          correctIndex: 1,
        }, // [cite: 18, 58, 102]
      ],
    },
    '11': {
      title: 'Body Idioms Warmup',
      questions: [
        {
          text: 'What does "cost an arm and a leg" mean?',
          options: ['Very expensive', 'To take a risk', 'To help out'],
          correctIndex: 0,
        }, // [cite: 117, 125]
        {
          text: 'To ignore someone is to give them the cold ___',
          options: ['Foot', 'Shoulder', 'Hand'],
          correctIndex: 1,
        }, // [cite: 131, 138]
      ],
    },
  };

  currentTask!: QuizTask;
  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;
  isQuizFinished = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.taskDatabase[id]) {
      this.currentTask = this.taskDatabase[id];
    } else {
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
    if (this.selectedOptionIndex === this.currentQuestion.correctIndex) this.score++;
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
