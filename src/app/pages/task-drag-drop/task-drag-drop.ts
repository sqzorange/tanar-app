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
  top?: number;
  left?: number;
  correctAnswer: string;
}

interface DragDropTask {
  title: string;
  instruction: string;
  type: 'list-to-list' | 'list-to-image' | 'list-to-table';
  availableOptions: string[];
  correctAnswers?: string[];
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
      title: 'Head and Neck Identification',
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
      requiredCount: 5,
      dropZones: [
        { label: 'A1', top: 15, left: 15, correctAnswer: 'Forehead' },
        { label: 'A2', top: 28, left: 80, correctAnswer: 'Zygoma (Cheekbone)' },
        { label: 'A3', top: 60, left: 15, correctAnswer: 'Mandible (Lower jaw)' },
        { label: 'A4', top: 80, left: 75, correctAnswer: 'Mentum (Chin)' },
        { label: 'A5', top: 80, left: 20, correctAnswer: "Adam's apple" },
      ],
    },
    '12': {
      title: 'Trunk: Medical vs. Everyday Terms',
      instruction: 'Húzd a hiányzó kifejezéseket a táblázat üres celláiba!',
      type: 'list-to-table',
      imageSrc: '../../../../public/trunk_anatomy.png',
      availableOptions: [
        'armpit',
        'clavicula',
        'sternum',
        'ribs',
        'chest',
        'inner elbow, elbow pit',
      ],
      requiredCount: 6,
      dropZones: [
        { label: 'row1_everyday', correctAnswer: 'armpit' },
        { label: 'row2_medical', correctAnswer: 'clavicula' },
        { label: 'row3_medical', correctAnswer: 'sternum' },
        { label: 'row4_everyday', correctAnswer: 'ribs' },
        { label: 'row7_medical', correctAnswer: 'chest' },
        { label: 'row8_medical', correctAnswer: 'inner elbow, elbow pit' },
      ],
    },
  };

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
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId && this.taskDatabase[taskId]) {
      this.currentTask = this.taskDatabase[taskId];

      // Kezdő opciók betöltése és összekeverése
      this.availableOptions = [...this.currentTask.availableOptions].sort(
        () => Math.random() - 0.5,
      );

      // Drop zónák inicializálása
      if (this.currentTask.dropZones) {
        this.droppedItems = {};
        this.currentTask.dropZones.forEach((zone) => {
          this.droppedItems[zone.label] = null;
        });
        // Ez kell a CDK-nak, hogy tudja, mely listákhoz csatlakozhat a forrás
        this.zoneLists = this.currentTask.dropZones.map((z) => z.label);
      }
    } else {
      this.location.back();
    }
  }

  // Ez a metódus kezeli a bedobást a kép pontjaira ÉS a táblázat celláiba is
  dropOnZone(event: CdkDragDrop<any>, zoneLabel: string) {
    const droppedItem = event.item.data;

    // Ha már van elem az adott zónában, azt visszatesszük az elérhető listába
    if (this.droppedItems[zoneLabel]) {
      this.availableOptions.push(this.droppedItems[zoneLabel]!);
    }

    // Beállítjuk az új elemet a zónához
    this.droppedItems[zoneLabel] = droppedItem;

    // Eltávolítjuk a forrás listából
    const index = this.availableOptions.indexOf(droppedItem);
    if (index > -1) {
      this.availableOptions.splice(index, 1);
    }
  }

  // Ellenőrizzük, hány mezőt töltöttek már ki (a gomb aktiválásához)
  getDroppedItemsCount(): number {
    return Object.values(this.droppedItems).filter((item) => item !== null).length;
  }

  submitTask() {
    let isPerfect = true;

    // Végigmenni a zónákon és ellenőrizni a helyes választ
    this.currentTask.dropZones?.forEach((zone) => {
      if (this.droppedItems[zone.label] !== zone.correctAnswer) {
        isPerfect = false;
      }
    });

    if (isPerfect) {
      alert('Tökéletes munka! 🏆');
      this.location.back();
    } else {
      alert('Sajnos van benne hiba! ❌ Próbáld újra!');
      this.resetTask();
    }
  }

  // Minden elemet visszateszünk a forrás listába
  resetTask() {
    Object.values(this.droppedItems).forEach((item) => {
      if (item) {
        this.availableOptions.push(item);
      }
    });

    // Ürítjük a zónákat
    if (this.currentTask.dropZones) {
      this.currentTask.dropZones.forEach((z) => {
        this.droppedItems[z.label] = null;
      });
    }

    // Újrakeverjük a válaszokat
    this.availableOptions.sort(() => Math.random() - 0.5);
  }

  goBack() {
    this.location.back();
  }
}
