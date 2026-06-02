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

  goBack(): void {
    this.location.back();
  }

  submitTask(): void {
    if (!this.currentTask) return;
    this.isGrading = true;
    this.gradingResults = null;

    const adaptedQuestions = this.currentTask.rows.map((row: SingleImageRow) => ({
      text: `Translate: ${row.label}`,
      correctAnswer: row.correctAnswer,
    }));

    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false;
    });
  }
}
