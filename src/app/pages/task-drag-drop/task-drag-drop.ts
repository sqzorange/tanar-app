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

interface DropZone {
  label: string;
  top: number;
  left: number;
  correctAnswer: string;
}

interface DragDropTask {
  title: string;
  instruction: string;
  type: 'list-to-list' | 'list-to-image';
  availableOptions: string[];
  correctAnswers: string[];
  requiredCount: number;
  imageSrc?: string;
  dropZones?: DropZone[];
}

@Component({
  selector: 'app-task-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-drag-drop.html',
  styleUrl: './task-drag-drop.scss',
})
export class TaskDragDropComponent implements OnInit {
  taskDatabase: { [key: string]: DragDropTask } = {
    '9': {
      title: 'Head and Neck Identification (Visual Challenge)',
      instruction:
        'A bal oldali listából húzd a megfelelő anatómiai kifejezést a kép megfelelő részére!',
      type: 'list-to-image',
      imageSrc: '../../../../public/head_neck_anatomy.png',
      availableOptions: [
        'Zygoma (Cheekbone)',
        'Mandible (Lower jaw)',
        "Adam's apple",
        'Forehead',
        'Mentum (Chin)',
      ],
      correctAnswers: [
        'Forehead',
        'Zygoma (Cheekbone)',
        'Mandible (Lower jaw)',
        'Mentum (Chin)',
        "Adam's apple",
      ],
      requiredCount: 5,
      dropZones: [
        { label: 'A1', top: 15, left: 15, correctAnswer: 'Forehead' },
        { label: 'A2', top: 28, left: 80, correctAnswer: 'Zygoma (Cheekbone)' },
        { label: 'A3', top: 60, left: 15, correctAnswer: 'Mandible (Lower jaw)' },
        { label: 'A4', top: 80, left: 75, correctAnswer: 'Mentum (Chin)' },
        { label: 'A5', top: 80, left: 20, correctAnswer: "Adam's apple" },
      ],
    },
    '15': {
      title: 'The Limbs (Végtagok)',
      instruction: 'Húzd be pontosan a 4 végtagokhoz tartozó csontot!',
      type: 'list-to-list',
      availableOptions: ['Scapula', 'Costae', 'Femur', 'Abdomen', 'Fibula', 'Hallux'],
      correctAnswers: ['Scapula', 'Femur', 'Fibula', 'Hallux'],
      requiredCount: 4,
    },
  };

  currentTask!: DragDropTask;
  availableOptions: string[] = [];
  selectedOptions: string[] = [];
  droppedItems: { [key: string]: string | null } = {};
  zoneLists: string[] = []; // A kép drop zónáihoz

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId && this.taskDatabase[taskId]) {
      this.currentTask = this.taskDatabase[taskId];
      this.availableOptions = [...this.currentTask.availableOptions];

      if (this.currentTask.dropZones) {
        this.currentTask.dropZones.forEach((zone) => (this.droppedItems[zone.label] = null));
        this.zoneLists = this.currentTask.dropZones.map((z) => z.label);
      }
    } else {
      this.location.back();
    }
  }

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

  dropOnImage(event: CdkDragDrop<any>, zoneLabel: string) {
    const droppedItem = event.item.data;
    if (this.droppedItems[zoneLabel]) {
      this.availableOptions.push(this.droppedItems[zoneLabel]!);
    }
    this.droppedItems[zoneLabel] = droppedItem;
    const index = this.availableOptions.indexOf(droppedItem);
    if (index > -1) this.availableOptions.splice(index, 1);
  }

  getDroppedItemsCount(): number {
    return Object.values(this.droppedItems).filter((item) => item !== null).length;
  }

  submitTask() {
    let isPerfect = false;
    if (this.currentTask.type === 'list-to-image') {
      isPerfect = true;
      this.currentTask.dropZones?.forEach((zone) => {
        if (this.droppedItems[zone.label] !== zone.correctAnswer) isPerfect = false;
      });
    } else {
      isPerfect =
        this.selectedOptions.every((option) => this.currentTask.correctAnswers.includes(option)) &&
        this.selectedOptions.length === this.currentTask.requiredCount;
    }

    if (isPerfect) {
      alert('Tökéletes munka! 🏆');
      this.location.back();
    } else {
      alert('Sajnos van benne hiba! ❌');
      this.resetTask();
    }
  }

  resetTask() {
    if (this.currentTask.type === 'list-to-image') {
      Object.values(this.droppedItems).forEach((item) => {
        if (item) this.availableOptions.push(item);
      });
      this.currentTask.dropZones?.forEach((z) => (this.droppedItems[z.label] = null));
    } else {
      this.availableOptions.push(...this.selectedOptions);
      this.selectedOptions = [];
    }
  }

  goBack() {
    this.location.back();
  }
}
