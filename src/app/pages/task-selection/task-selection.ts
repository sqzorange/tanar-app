import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SELECTION_DATABASE, SelectionTask } from '../../taskData/tasks-data';

@Component({
  selector: 'app-task-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-selection.html',
  styleUrl: './task-selection.scss',
})
export class TaskSelectionComponent implements OnInit {
  currentTask!: SelectionTask;
  selectedIds: number[] = [];

  // Egységesített állapot (nincs pontozás, csak beküldés)
  isSubmitted = false;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && SELECTION_DATABASE[id]) {
      this.currentTask = SELECTION_DATABASE[id];
    } else {
      console.error('Selection task not found!');
      this.location.back();
    }
  }

  toggleSelection(id: number) {
    if (this.isSubmitted) return; // Beküldés után nem engedjük módosítani

    const index = this.selectedIds.indexOf(id);
    if (index > -1) {
      this.selectedIds.splice(index, 1);
    } else {
      // Csak akkor engedünk újat választani, ha még nem értük el a limitet
      if (this.selectedIds.length < this.currentTask.requiredCount) {
        this.selectedIds.push(id);
      }
    }
  }

  isSelected(id: number): boolean {
    return this.selectedIds.includes(id);
  }

  submitSelection() {
    if (this.selectedIds.length === this.currentTask.requiredCount) {
      this.isSubmitted = true;
    }
  }

  retryTask() {
    this.isSubmitted = false;
    this.selectedIds = [];
  }

  goBack() {
    this.location.back();
  }
}
