import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { DRAG_DROP_DATABASE, DragDropTask } from '../../tasks-data';

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

  // Változók a képhez és táblázathoz
  droppedItems: { [key: string]: string | null } = {};
  zoneLists: string[] = [];

  // Változók a list-to-list (15-ös) feladathoz
  anteriorList: string[] = [];
  posteriorList: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId && DRAG_DROP_DATABASE[taskId]) {
      this.currentTask = DRAG_DROP_DATABASE[taskId];

      this.availableOptions = [...this.currentTask.availableOptions].sort(
        () => Math.random() - 0.5,
      );

      if (this.currentTask.type === 'list-to-list') {
        // A CDK-nak tudnia kell, hova húzhatunk
        this.zoneLists = ['anteriorList', 'posteriorList'];
      } else if (this.currentTask.dropZones) {
        this.droppedItems = {};
        this.currentTask.dropZones.forEach((zone) => {
          this.droppedItems[zone.label] = null;
        });
        this.zoneLists = this.currentTask.dropZones.map((z) => z.label);
      }
    } else {
      console.error('Drag & Drop task not found!');
      this.location.back();
    }
  }

  // Drop metódus a képhez és táblázathoz
  dropOnZone(event: CdkDragDrop<any>, zoneLabel: string) {
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

  // Drop metódus a List-to-List (15-ös) feladathoz
  dropToList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Ha ugyanazon a listán belül mozgatjuk
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Ha áthúzzuk egyikből a másikba
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

  submitTask() {
    let isPerfect = true;

    if (this.currentTask.type === 'list-to-list') {
      // Ellenőrzés a list-to-list feladathoz
      const correctAnterior =
        this.currentTask.dropZones?.find((z) => z.label === 'anterior')?.correctAnswer.split(',') ||
        [];
      const correctPosterior =
        this.currentTask.dropZones
          ?.find((z) => z.label === 'posterior')
          ?.correctAnswer.split(',') || [];

      // Megnézzük, hogy minden az anteriorList-ben lévő elem benne van-e a helyes listában
      this.anteriorList.forEach((item) => {
        if (!correctAnterior.includes(item)) isPerfect = false;
      });
      // Ugyanez a posteriorra
      this.posteriorList.forEach((item) => {
        if (!correctPosterior.includes(item)) isPerfect = false;
      });
    } else {
      // Ellenőrzés a képhez/táblázathoz
      this.currentTask.dropZones?.forEach((zone) => {
        if (this.droppedItems[zone.label] !== zone.correctAnswer) {
          isPerfect = false;
        }
      });
    }

    if (isPerfect) {
      alert('Perfect job! 🏆');
      this.location.back();
    } else {
      alert('Unfortunately, there are some mistakes! ❌ Try again!');
      this.resetTask();
    }
  }

  resetTask() {
    if (this.currentTask.type === 'list-to-list') {
      // Mindent visszadobunk a forrásba
      this.availableOptions.push(...this.anteriorList, ...this.posteriorList);
      this.anteriorList = [];
      this.posteriorList = [];
    } else {
      // Reset logika képhez/táblázathoz
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

  goBack() {
    this.location.back();
  }
}
