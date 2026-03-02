import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-drag-drop.html',
  styleUrl: './task-drag-drop.scss',
})
export class TaskDragDropComponent {
  availableOptions = [
    '💡 Ötlet 1',
    '🚀 Ötlet 2',
    '🎯 Ötlet 3',
    '⚙️ Ötlet 4',
    '🎨 Ötlet 5',
    '📊 Ötlet 6',
    '🛠️ Ötlet 7',
    '🔍 Ötlet 8',
    '🧩 Ötlet 9',
  ];

  selectedOptions: string[] = [];

  constructor(private router: Router) {}

  // Ezt a függvényt hívja meg a HTML, hogy megnézze, betehető-e az elem
  maxFiveItems = (drag: CdkDrag, drop: CdkDropList) => {
    // Csak akkor engedjük bedobni, ha kevesebb mint 5 elem van bent
    return this.selectedOptions.length < 5;
  };

  drop(event: CdkDragDrop<string[]>) {
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

  submitTask() {
    alert('Szuper! Sikeresen kiválasztottad az 5 legjobb ötletet.');
    // Ide jöhet majd a mentés logikája
    this.router.navigate(['/home']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
