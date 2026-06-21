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
  templateUrl: './task-image-fill-in-component.html', // Javítottam a fájlnevet a standard formátumra
  styleUrls: ['./task-image-fill-in-component.scss'], // Javítottam a fájlnevet
})
export class TaskImageFillInComponent implements OnInit {
  currentTask!: ImageFillInTask;
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
      if (taskId && IMAGE_FILL_IN_DATABASE[taskId]) {
        this.currentTask = IMAGE_FILL_IN_DATABASE[taskId];
        this.currentTask.images.forEach(
          (_: ImageFillItem, i: number) => (this.userAnswers[i] = ''),
        );
      }
    });
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return this.currentTask.images.every(
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

    const adaptedQuestions = this.currentTask.images.map((img: ImageFillItem) => ({
      text: 'Identify the body system shown in the image.',
      correctAnswer: img.correctAnswer,
    }));

    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false;
      this.isEvaluated = true;

      // Pontszámítás: csak a tökéletesen helyes válaszok érnek 1 pontot
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
    this.currentTask.images.forEach((_, i) => (this.userAnswers[i] = ''));
  }
}
