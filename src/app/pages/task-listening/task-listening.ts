import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LISTENING_DATABASE, ListeningTask } from '../../taskData/tasks-data';
import { AiGradingService, GradingResult } from '../../services/ai-grading';

@Component({
  selector: 'app-task-listening',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-listening.html',
  styleUrl: './task-listening.scss',
})
export class TaskListeningComponent implements OnInit {
  currentTask!: ListeningTask;
  userAnswers: { [index: number]: string } = {};

  gradingState: 'idle' | 'grading' | 'completed' = 'idle';
  aiFeedback: GradingResult[] = [];

  // Egységesített értékelő változók
  score = 0;
  showAnswers = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aiGrading: AiGradingService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && LISTENING_DATABASE[id]) {
      this.currentTask = LISTENING_DATABASE[id];
      // Inicializáljuk a válaszokat
      this.currentTask.questions.forEach((_, i) => (this.userAnswers[i] = ''));
    } else {
      this.location.back();
    }
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return this.currentTask.questions.every(
      (_, i) => this.userAnswers[i] && this.userAnswers[i].trim() !== '',
    );
  }

  submitTask() {
    if (!this.currentTask || !this.isAllAnswered()) return;

    this.gradingState = 'grading';
    this.showAnswers = false;
    this.score = 0;

    this.aiGrading
      .gradeAnswers(this.currentTask.questions, this.userAnswers)
      .subscribe((results: GradingResult[]) => {
        this.aiFeedback = results;
        this.gradingState = 'completed';

        // Pontszámítás: minden tökéletesen helyes válasz ér 1 pontot
        this.score = results.filter((r) => r.status === 'correct').length;
      });
  }

  toggleAnswers() {
    this.showAnswers = !this.showAnswers;
  }

  retryTask() {
    this.gradingState = 'idle';
    this.aiFeedback = [];
    this.score = 0;
    this.showAnswers = false;
    // Töröljük a beírt válaszokat
    this.currentTask.questions.forEach((_, i) => (this.userAnswers[i] = ''));
  }

  goBack() {
    this.location.back();
  }
}
