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

  // Változók a képhez, táblázathoz és a lyukas szöveghez (list-to-text)
  droppedItems: { [key: string]: string | null } = {};
  zoneLists: string[] = [];

  // Változók a list-to-list (két oszlopos) feladathoz
  anteriorList: string[] = [];
  posteriorList: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    // A snapshot helyett feliratkozunk (subscribe) a paraméterek változására
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');

      if (taskId && DRAG_DROP_DATABASE[taskId]) {
        this.currentTask = DRAG_DROP_DATABASE[taskId];

        // Opciók összekeverése
        this.availableOptions = [...this.currentTask.availableOptions].sort(
          () => Math.random() - 0.5,
        );

        if (this.currentTask.type === 'list-to-list') {
          // A CDK-nak tudnia kell, hova húzhatunk
          this.zoneLists = ['anteriorList', 'posteriorList'];

          // Ha visszatérünk egy feladatra, nullázzuk a listákat
          this.anteriorList = [];
          this.posteriorList = [];
        } else if (this.currentTask.dropZones) {
          // Ez fut le a list-to-table, list-to-image ÉS a list-to-text esetében is!
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
    });
  }

  // Drop metódus a képhez, táblázathoz és szöveghez
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

  // Drop metódus a List-to-List feladathoz
  dropToList(event: CdkDragDrop<string[]>) {
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

  submitTask() {
    let isPerfect = true;

    if (this.currentTask.type === 'list-to-list') {
      // JAVÍTÁS: Dinamikusan olvassuk ki a helyes válaszokat a feladat adatbázisából!
      const correctList1 = this.currentTask.dropZones?.[0]?.correctAnswer.split(',') || [];
      const correctList2 = this.currentTask.dropZones?.[1]?.correctAnswer.split(',') || [];

      // Ellenőrizzük az első oszlopot (pl. Anterior vagy Sick)
      this.anteriorList.forEach((item) => {
        if (!correctList1.includes(item)) isPerfect = false;
      });

      // Ellenőrizzük a második oszlopot (pl. Posterior vagy Not Sick)
      this.posteriorList.forEach((item) => {
        if (!correctList2.includes(item)) isPerfect = false;
      });
    } else {
      // Ellenőrzés a képhez, táblázathoz és lyukas szöveghez
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

  goBack() {
    this.location.back();
  }
}
