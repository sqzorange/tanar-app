import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IMAGE_FILL_IN_DATABASE, ImageFillInTask, ImageFillItem } from '../../taskData/tasks-data';
import { AiGradingService, GradingResult } from '../../services/ai-grading';

@Component({
  selector: 'app-task-image-fill-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-image-fill-in-component.html',
  styleUrls: ['./task-image-fill-in-component.scss'],
})
export class TaskImageFillInComponent implements OnInit {
  currentTask!: ImageFillInTask;
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
      if (taskId && IMAGE_FILL_IN_DATABASE[taskId]) {
        this.currentTask = IMAGE_FILL_IN_DATABASE[taskId];
        this.currentTask.images.forEach(
          (_: ImageFillItem, i: number) => (this.userAnswers[i] = ''),
        );
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

    const adaptedQuestions = this.currentTask.images.map((img: ImageFillItem) => ({
      text: 'Identify the body system shown in the image.',
      correctAnswer: img.correctAnswer,
    }));

    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false;
    });
  }
}
