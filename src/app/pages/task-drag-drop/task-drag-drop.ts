import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, DragDropModule, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { DRAG_DROP_DATABASE, DragDropTask } from '../../tasks-data'; // Importáld a megfelelő útvonalról!

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    // Kiolvassuk az ID-t az URL-ből
    const taskId = this.route.snapshot.paramMap.get('id');

    // Ha van ilyen ID az adatbázisban, betöltjük
    if (taskId && DRAG_DROP_DATABASE[taskId]) {
      this.currentTask = DRAG_DROP_DATABASE[taskId];

      // Shuffle available options
      this.availableOptions = [...this.currentTask.availableOptions].sort(
        () => Math.random() - 0.5,
      );

      // Initialize drop zones
      if (this.currentTask.dropZones) {
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

  getDroppedItemsCount(): number {
    return Object.values(this.droppedItems).filter((item) => item !== null).length;
  }

  submitTask() {
    let isPerfect = true;

    this.currentTask.dropZones?.forEach((zone) => {
      if (this.droppedItems[zone.label] !== zone.correctAnswer) {
        isPerfect = false;
      }
    });

    if (isPerfect) {
      alert('Perfect job! 🏆');
      this.location.back();
    } else {
      alert('Unfortunately, there are some mistakes! ❌ Try again!');
      this.resetTask();
    }
  }

  resetTask() {
    Object.values(this.droppedItems).forEach((item) => {
      if (item) {
        this.availableOptions.push(item);
      }
    });

    if (this.currentTask.dropZones) {
      this.currentTask.dropZones.forEach((z) => {
        this.droppedItems[z.label] = null;
      });
    }

    this.availableOptions.sort(() => Math.random() - 0.5);
  }

  goBack() {
    this.location.back();
  }
}
