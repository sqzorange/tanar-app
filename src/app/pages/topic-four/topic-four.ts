import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Adatbázisok behúzása a nyomtatási nézethez
import { topic4DragDrop, topic4AiFillIn } from '../../taskData/topic-4-data';

@Component({
  selector: 'app-topic-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-four.html',
  styleUrls: ['./topic-four.scss'],
})
export class TopicFourComponent {
  dragDropData: any = topic4DragDrop;
  aiFillInData: any = topic4AiFillIn;

  // A szószedet adatai átemelve a TS fájlba a tisztább HTML és az egyszerűbb kezelés érdekében
  glossaryTerms = [
    { e: 'state scholarship', h: 'állami ösztöndíj' },
    { e: 'honorary associate professor', h: 'címzetes egyetemi docens' },
    { e: 'dean', h: 'dékán' },
    { e: 'vice dean', h: 'dékánhelyettes' },
    { e: 'deans office', h: 'dékáni hivatal' },
    { e: 'head of deans office', h: 'dékáni hivatalvezető' },
    { e: 'degree thesis', h: 'diplomamunka' },
    { e: 'thesis defence', h: 'diplomavédés' },
    { e: 'Doctor of Philosophy (PhD)', h: 'doktori (PhD) fokozat' },
    { e: 'senior lecturer', h: 'egyetemi adjunktus' },
    { e: 'associate professor', h: 'egyetemi docens' },
    { e: 'rector', h: 'egyetemi rektor' },
    { e: 'professor', h: 'egyetemi tanár' },
    { e: 'assistant lecturer', h: 'egyetemi tanársegéd' },
    { e: 'prerequisite', h: 'előkövetelmény' },
    { e: 'term', h: 'félév' },
    { e: 'doctor of Dentistry', h: 'fogorvos doktor' },
    { e: 'repeated / retake examination', h: 'javító vizsga' },
    { e: 'attendance', h: 'jelenlét' },
    { e: 'faculty', h: 'kar' },
    { e: 'off-site practice', h: 'kihelyezett gyakorlat' },
    { e: 'off-site training', h: 'kihelyezett képzés' },
    { e: 'obligatory course-unit', h: 'kötelező tantárgy' },
    { e: 'elective course-unit', h: 'kötelezően választható tantárgy' },
    { e: 'subject requirements', h: 'követelmények' },
    { e: 'credit recognition', h: 'kredit elfogadás' },
    { e: 'laboratory practice', h: 'laboratóriumi gyakorlat' },
    { e: 'module', h: 'modul' },
    { e: 'workshop practice', h: 'műhelygyakorlat' },
    { e: 'specialisation', h: 'műveltségterület' },
    { e: 'self-funding students', h: 'önköltséges hallgatók' },
    { e: 'scholarship', h: 'ösztöndíj' },
    { e: 'vice rector', h: 'rektorhelyettes' },
    { e: 'optional course-unit', h: 'szabadon választható tantárgy' },
    { e: 'oral exam', h: 'szóbeli vizsga' },
    { e: 'department', h: 'tanszék' },
    { e: 'head of department', h: 'tanszékvezető' },
    { e: 'course, subject', h: 'tantárgy' },
    { e: 'curriculum', h: 'tanterv' },
    { e: 'Faculty Study Committee / Academic Office', h: 'tanulmányi osztály' },
    { e: 'academic registrar', h: 'tanulmányi osztályvezető' },
    { e: 'distance education', h: 'távoktatás' },
    { e: 'exam', h: 'vizsga (kollokvium)' },
    { e: 'exam mark', h: 'vizsgajegy' },
  ];

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  goBack(): void {
    this.location.back();
  }

  openTask(taskType: string, taskId: string | number): void {
    this.router.navigate(['/task', taskType, taskId]);
  }

  playSound(text: string): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }

  printPage(): void {
    window.print();
  }

  getDropAnswer(cellValue: string, dropZones: any[]): string {
    if (!dropZones) return '';
    const zone = dropZones.find((z: any) => z.label === cellValue);
    return zone ? zone.correctAnswer : '';
  }
}
