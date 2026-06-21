import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AI_FILL_IN_DATABASE, AiFillInTask } from '../../taskData/tasks-data';

import { AiGradingService, GradingResult } from '../../services/ai-grading';

@Component({
  selector: 'app-task-ai-fill-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-ai-fill-in.html',
  styleUrls: ['./task-ai-fill-in.scss'],
})
export class TaskAiFillInComponent implements OnInit {
  currentTask!: AiFillInTask;
  userAnswers: { [index: number]: string } = {};
  gradingResults: GradingResult[] | null = null;
  isGrading = false;

  // Egységesített értékelő változók
  isEvaluated = false;
  score = 0;
  showAnswers = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aiGradingService: AiGradingService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');
      if (taskId && AI_FILL_IN_DATABASE[taskId]) {
        this.currentTask = AI_FILL_IN_DATABASE[taskId];

        // Üres válaszok inicializálása
        this.currentTask.sentences.forEach((_, i) => (this.userAnswers[i] = ''));
      }
    });
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return this.currentTask.sentences.every(
      (_, i) => this.userAnswers[i] && this.userAnswers[i].trim() !== '',
    );
  }

  submitTask() {
    if (!this.currentTask || !this.isAllAnswered()) return;

    this.isGrading = true;
    this.gradingResults = null;
    this.isEvaluated = false;
    this.showAnswers = false;

    // Átalakítjuk a mondatokat olyan formátumra, amit a te AiGradingService-ed vár
    const adaptedQuestions = this.currentTask.sentences.map((s) => ({
      text: '', // A szervized ezt úgysem használja az értékeléshez
      correctAnswer: s.correctAnswer,
    }));

    // Hívjuk a szervizt
    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false;
      this.isEvaluated = true;

      // Kiszámoljuk a pontszámot (csak a tökéletesen helyes válaszok érnek 1 pontot)
      this.score = results.filter((r) => r.status === 'correct').length;
    });
  }

  toggleAnswers() {
    this.showAnswers = !this.showAnswers;
  }

  retryTask() {
    this.isEvaluated = false;
    this.gradingResults = null;
    this.score = 0;
    this.showAnswers = false;
    // Töröljük a beírt válaszokat
    this.currentTask.sentences.forEach((_, i) => (this.userAnswers[i] = ''));
  }

  goBack() {
    this.location.back();
  }
}
