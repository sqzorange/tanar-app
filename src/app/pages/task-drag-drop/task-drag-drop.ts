import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DRAG_DROP_DATABASE, DragDropTask } from '../../taskData/tasks-data';

@Component({
  selector: 'app-task-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-drag-drop.html',
  styleUrl: './task-drag-drop.scss',
})
export class TaskDragDropComponent implements OnInit {
  currentTask!: DragDropTask;
  availableOptions: string[] = [];

  droppedItems: { [key: string]: string | null } = {};
  zoneLists: string[] = [];

  anteriorList: string[] = [];
  posteriorList: string[] = [];

  // --- ÚJ VÁLTOZÓK AZ ÉRTÉKELÉSHEZ ---
  isEvaluated = false;
  score = 0;
  maxScore = 0;
  showAnswers = false;
  gradingResults: { [key: string]: 'correct' | 'incorrect' } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');

      if (taskId && DRAG_DROP_DATABASE[taskId]) {
        this.currentTask = DRAG_DROP_DATABASE[taskId];
        this.availableOptions = [...this.currentTask.availableOptions].sort(
          () => Math.random() - 0.5,
        );

        if (this.currentTask.type === 'list-to-list') {
          this.zoneLists = ['anteriorList', 'posteriorList'];
          this.anteriorList = [];
          this.posteriorList = [];
        } else if (this.currentTask.dropZones) {
          this.droppedItems = {};
          this.currentTask.dropZones.forEach((zone) => {
            this.droppedItems[zone.label] = null;
          });
          this.zoneLists = this.currentTask.dropZones.map((z) => z.label);
        }
      } else {
        this.location.back();
      }
    });
  }

  dropOnZone(event: CdkDragDrop<any>, zoneLabel: string) {
    if (this.isEvaluated) return; // Értékelés után letiltjuk a mozgatást
    const droppedItem = event.item.data;
    if (this.droppedItems[zoneLabel]) {
      this.availableOptions.push(this.droppedItems[zoneLabel]!);
    }
    this.droppedItems[zoneLabel] = droppedItem;
    const index = this.availableOptions.indexOf(droppedItem);
    if (index > -1) {
      this.availableOptions.splice(index, 1);
    }
  }

  dropToList(event: CdkDragDrop<string[]>) {
    if (this.isEvaluated) return;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getDroppedItemsCount(): number {
    if (this.currentTask.type === 'list-to-list') {
      return this.anteriorList.length + this.posteriorList.length;
    }
    return Object.values(this.droppedItems).filter((item) => item !== null).length;
  }

  // --- ÚJ EGYSÉGES KIÉRTÉKELŐ FÜGGVÉNY ---
  submitTask() {
    this.isEvaluated = true;
    this.score = 0;
    this.gradingResults = {};
    this.showAnswers = false;

    if (this.currentTask.type === 'list-to-list') {
      const correctList1 = this.currentTask.dropZones?.[0]?.correctAnswer.split(',') || [];
      const correctList2 = this.currentTask.dropZones?.[1]?.correctAnswer.split(',') || [];
      this.maxScore = this.currentTask.requiredCount;

      this.anteriorList.forEach((item) => {
        if (correctList1.includes(item)) {
          this.score++;
          this.gradingResults[item] = 'correct';
        } else this.gradingResults[item] = 'incorrect';
      });

      this.posteriorList.forEach((item) => {
        if (correctList2.includes(item)) {
          this.score++;
          this.gradingResults[item] = 'correct';
        } else this.gradingResults[item] = 'incorrect';
      });
    } else {
      this.maxScore = this.currentTask.dropZones?.length || 0;
      this.currentTask.dropZones?.forEach((zone) => {
        if (this.droppedItems[zone.label] === zone.correctAnswer) {
          this.score++;
          this.gradingResults[zone.label] = 'correct';
        } else {
          this.gradingResults[zone.label] = 'incorrect';
        }
      });
    }

    if (this.score === this.maxScore) {
      setTimeout(() => alert('Perfect score! Well done! 🏆'), 300);
    }
  }

  toggleAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }

  retryTask(): void {
    this.isEvaluated = false;
    this.gradingResults = {};
    this.score = 0;
    this.showAnswers = false;

    // Visszaállítjuk az eredeti állapotot (reset)
    if (this.currentTask.type === 'list-to-list') {
      this.availableOptions.push(...this.anteriorList, ...this.posteriorList);
      this.anteriorList = [];
      this.posteriorList = [];
    } else {
      Object.values(this.droppedItems).forEach((item) => {
        if (item) this.availableOptions.push(item);
      });
      if (this.currentTask.dropZones) {
        this.currentTask.dropZones.forEach((z) => {
          this.droppedItems[z.label] = null;
        });
      }
    }
    this.availableOptions.sort(() => Math.random() - 0.5);
  }

  // Segédfüggvény a hintekhez
  getHintFor(key: string): string {
    if (this.currentTask.type === 'list-to-list') {
      const correctList1 = this.currentTask.dropZones?.[0]?.correctAnswer.split(',') || [];
      return correctList1.includes(key)
        ? this.currentTask.dropZones![0].label
        : this.currentTask.dropZones![1].label;
    }
    const zone = this.currentTask.dropZones?.find((z) => z.label === key);
    return zone ? zone.correctAnswer : '';
  }

  goBack() {
    this.location.back();
  }
}
