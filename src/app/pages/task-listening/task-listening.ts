import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LISTENING_DATABASE, ListeningTask } from '../../tasks-data';
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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private aiGrading: AiGradingService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && LISTENING_DATABASE[id]) {
      this.currentTask = LISTENING_DATABASE[id];
    } else {
      this.location.back();
    }
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return this.currentTask.questions.some(
      (_, i) => this.userAnswers[i] && this.userAnswers[i].trim() !== '',
    );
  }

  submitTask() {
    this.gradingState = 'grading';

    // Itt volt a TS7006 hiba, amit a : GradingResult[] megadásával javítottam
    this.aiGrading
      .gradeAnswers(this.currentTask.questions, this.userAnswers)
      .subscribe((results: GradingResult[]) => {
        this.aiFeedback = results;
        this.gradingState = 'completed';
      });
  }

  retryTask() {
    this.gradingState = 'idle';
    this.aiFeedback = [];
  }

  goBack() {
    this.location.back();
  }
}
