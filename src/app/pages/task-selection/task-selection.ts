import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-selection.html',
  styleUrl: './task-selection.scss',
})
export class TaskSelectionComponent {
  title = 'Féléves témakörök prioritása';
  instruction =
    'Válasszon ki pontosan 5 témakört, amelyeket mindenképpen vegyünk át ebben a félévben!';

  // A lista a beküldött Mentimeter kép alapján
  options = [
    { id: 1, text: 'Egészség, betegség, panaszok' },
    { id: 2, text: 'Testrészek, szervrendszerek' },
    { id: 3, text: 'Fogorvosképzés hazánkban és külföldön' },
    { id: 4, text: 'Az egészségügyi ellátók, munkakörök' },
    { id: 5, text: 'Szak- és továbbképzés hazánkban és külföldön' },
    { id: 6, text: 'Tananyagok feldolgozása, kivonatolás, tömörítés, tanulási technikák' },
    { id: 7, text: 'ppt, prezi... kiselőadások módszertana' },
    { id: 8, text: 'Jegyzetelési technikák, olvasott szövegértés' },
    { id: 9, text: 'Jegyzetelési technikák, hallott szövegértés' },
  ];

  selectedIds: number[] = [];

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  toggleSelection(id: number) {
    const index = this.selectedIds.indexOf(id);
    if (index > -1) {
      this.selectedIds.splice(index, 1);
    } else {
      if (this.selectedIds.length < 5) {
        this.selectedIds.push(id);
      }
    }
  }

  isSelected(id: number): boolean {
    return this.selectedIds.includes(id);
  }

  submitSelection() {
    if (this.selectedIds.length === 5) {
      console.log('Kiválasztott témák ID-i:', this.selectedIds);
      alert('Köszönjük a visszajelzést! A prioritások rögzítve lettek.');
      this.router.navigate(['/home']);
    }
  }

  goBack() {
    this.location.back();
  }
}
