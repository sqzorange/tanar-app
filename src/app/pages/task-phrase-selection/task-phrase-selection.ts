import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PHRASE_SELECTION_DATABASE, PhraseSelectionTask } from '../../taskData/tasks-data';

@Component({
  selector: 'app-task-phrase-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-phrase-selection.html',
  styleUrl: './task-phrase-selection.scss',
})
export class TaskPhraseSelectionComponent implements OnInit {
  currentTask!: PhraseSelectionTask;
  selectedPhrases: { [categoryIndex: number]: number[] } = {};

  // Egységesített állapot
  isSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');
      if (taskId && PHRASE_SELECTION_DATABASE[taskId]) {
        this.currentTask = PHRASE_SELECTION_DATABASE[taskId];
        // Inicializáljuk a kategóriák kiválasztó tömbjeit
        this.currentTask.categories.forEach((_, index) => {
          this.selectedPhrases[index] = [];
        });
      } else {
        console.error('Phrase selection task not found!');
        this.location.back();
      }
    });
  }

  public togglePhrase(catIndex: number, phraseIndex: number): void {
    if (this.isSubmitted) return; // Ne engedjük módosítani beküldés után

    if (!this.selectedPhrases[catIndex]) return;

    const selected = this.selectedPhrases[catIndex];
    const pos = selected.indexOf(phraseIndex);
    const required = this.currentTask.categories[catIndex].requiredCount;

    if (pos > -1) {
      selected.splice(pos, 1);
    } else if (selected.length < required) {
      selected.push(phraseIndex);
    }
  }

  public isComplete(): boolean {
    if (!this.currentTask || !this.currentTask.categories) {
      return false;
    }

    return this.currentTask.categories.every(
      (cat, index) =>
        this.selectedPhrases[index] && this.selectedPhrases[index].length === cat.requiredCount,
    );
  }

  public submitTask(): void {
    if (this.isComplete()) {
      this.isSubmitted = true;
    }
  }

  public retryTask(): void {
    this.isSubmitted = false;
    // Töröljük a válogatásokat
    this.currentTask.categories.forEach((_, index) => {
      this.selectedPhrases[index] = [];
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
