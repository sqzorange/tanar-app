import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { INLINE_CHOICE_DATABASE, InlineChoiceTask } from '../../tasks-data';

@Component({
  selector: 'app-task-inline-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-inline-choice.html',
  styleUrl: './task-inline-choice.scss',
})
export class TaskInlineChoiceComponent implements OnInit {
  currentTask!: InlineChoiceTask;

  // A felhasználó választásait tároljuk, index szerint
  selectedAnswers: { [sentenceIndex: number]: string } = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && INLINE_CHOICE_DATABASE[id]) {
      this.currentTask = INLINE_CHOICE_DATABASE[id];
    } else {
      console.error('Inline Choice task not found!');
      this.location.back();
    }
  }

  selectOption(sentenceIndex: number, option: string) {
    this.selectedAnswers[sentenceIndex] = option;
  }

  isAllAnswered(): boolean {
    if (!this.currentTask) return false;
    return Object.keys(this.selectedAnswers).length === this.currentTask.sentences.length;
  }

  submitTask() {
    let isPerfect = true;

    this.currentTask.sentences.forEach((sentence, index) => {
      if (this.selectedAnswers[index] !== sentence.correctAnswer) {
        isPerfect = false;
      }
    });

    if (isPerfect) {
      alert('Excellent work! You selected all the correct words. 🏆');
      this.location.back();
    } else {
      alert('There are a few mistakes. Review your choices and try again! ❌');
      // Opcionális: itt törölhetnéd a rossz válaszokat, de most csak figyelmeztetünk
    }
  }

  goBack() {
    this.location.back();
  }
}
