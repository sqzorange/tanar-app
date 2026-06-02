import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Importáljuk be a Topic 2 összes adatbázisát a nyomtatási nézethez!
// (Ellenőrizd, hogy a fájl elnevezése és elérési útja pontosan egyezik-e a te projekteddel)
import {
  topic2DragDrop,
  topic2InlineChoice,
  topic2Listening,
  topic2AiFillIn,
  topic2PhraseSelection,
} from '../../taskData/topic-2-data';

@Component({
  selector: 'app-topic-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-two.html',
  styleUrl: './topic-two.scss',
})
export class TopicTwoComponent {
  // A feladatok adatainak elérhetővé tétele a HTML (nyomtatás) számára
  dragDropData: any = topic2DragDrop;
  inlineChoiceData: any = topic2InlineChoice;
  aiFillInData: any = topic2AiFillIn;
  listeningData: any = topic2Listening;
  phraseSelectionData: any = topic2PhraseSelection;

  constructor(private router: Router) {}

  openTask(type: string, taskId: string | number) {
    this.router.navigate(['/task', type, taskId]);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  // --- Nyomtatás indítása ---
  printPage() {
    window.print();
  }

  // Segédfüggvény a táblázatos Drag & Drop megoldásokhoz
  getDropAnswer(cellValue: string, dropZones: any[]): string {
    if (!dropZones) return '';
    const zone = dropZones.find((z: any) => z.label === cellValue);
    return zone ? zone.correctAnswer : '';
  }

  // Segédfüggvény az AI Fill-in több lehetséges válaszának formázásához (pl. haematology | hematology)
  formatAiAnswer(answer: string): string {
    if (!answer) return '';
    return answer.split('|')[0].trim(); // Csak az első, fő megoldást írjuk ki a papírra
  }
}
