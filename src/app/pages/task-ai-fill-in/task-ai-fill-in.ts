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

  goBack() {
    this.location.back();
  }

  submitTask() {
    if (!this.currentTask) return;

    this.isGrading = true;
    this.gradingResults = null; // Előző eredmények törlése

    // Átalakítjuk a mondatokat olyan formátumra, amit a te AiGradingService-ed vár
    const adaptedQuestions = this.currentTask.sentences.map((s) => ({
      text: '', // A szervized ezt úgysem használja az értékeléshez
      correctAnswer: s.correctAnswer,
    }));

    // Hívjuk a szervizt
    this.aiGradingService.gradeAnswers(adaptedQuestions, this.userAnswers).subscribe((results) => {
      this.gradingResults = results;
      this.isGrading = false; // Kikapcsoljuk a töltőképernyőt
    });
  }
}
