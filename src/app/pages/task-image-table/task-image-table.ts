import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IMAGE_TABLE_DATABASE,
  SingleImageFillInTask,
  SingleImageRow,
} from '../../taskData/tasks-data';
import { AiGradingService, GradingResult } from '../../services/ai-grading';

@Component({
  selector: 'app-task-image-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-image-table.html',
  styleUrls: ['./task-image-table.scss'],
})
export class TaskImageTableComponent implements OnInit {
  currentTask!: SingleImageFillInTask;
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
      if (taskId && IMAGE_TABLE_DATABASE[taskId]) {
        this.currentTask = IMAGE_TABLE_DATABASE[taskId];
        this.currentTask.rows.forEach((_: SingleImageRow, i: number) => (this.userAnswers[i] = ''));
      }
    });
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return this.currentTask.rows.every(
      (_, i) => this.userAnswers[i] && this.userAnswers[i].trim() !== '',
    );
  }

  goBack(): void {
    this.location.back();
  }

  submitTask(): void {
    if (!this.currentTask || !this.isAllAnswered()) return;

    this.isGrading = true;
    this.gradingResults = null;
    this.isEvaluated = false;
    this.showAnswers = false;

    const adaptedQuestions = this.currentTask.rows.map((row: SingleImageRow) => ({
      text: `Translate: ${row.label}`,
      correctAnswer: row.correctAnswer,
    }));

    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false;
      this.isEvaluated = true;

      // Pontszámítás: minden 'correct' státusz egy pont
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
    this.currentTask.rows.forEach((_, i) => (this.userAnswers[i] = ''));
  }
}
