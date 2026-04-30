import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ListeningQuestion } from '../tasks-data';

export interface GradingResult {
  status: 'correct' | 'partial' | 'incorrect';
  feedback: string;
}

@Injectable({
  providedIn: 'root',
})
export class AiGradingService {
  gradeAnswers(
    questions: ListeningQuestion[],
    userAnswers: { [index: number]: string },
  ): Observable<GradingResult[]> {
    const results: GradingResult[] = questions.map((q, i) => {
      const studentAnswer = (userAnswers[i] || '').toLowerCase().trim();

      // Ha üres a válasz
      if (studentAnswer.length === 0) {
        return { status: 'incorrect', feedback: 'You left this blank. Try to listen again!' };
      }

      // Elvárások feldarabolása a vesszők (ÉS) mentén
      // Pl: ["egg | eggs", "peanut | peanuts"]
      const requiredConcepts = q.correctAnswer.toLowerCase().split(',');
      let matchedConceptsCount = 0;

      // Végigmegyünk minden kötelező koncepción
      requiredConcepts.forEach((conceptStr) => {
        // Feldaraboljuk a vonalak (VAGY) mentén
        // Pl: ["egg", "eggs"]
        const synonyms = conceptStr.split('|').map((s) => s.trim());

        // Ellenőrizzük, hogy a szinonimák közül legalább EGYET leírt-e a diák
        const hasMatch = synonyms.some((synonym) => studentAnswer.includes(synonym));

        if (hasMatch) {
          matchedConceptsCount++;
        }
      });

      // ÉRTÉKELÉS
      if (matchedConceptsCount === requiredConcepts.length) {
        return { status: 'correct', feedback: 'Perfect! You captured the main idea accurately.' };
      } else if (matchedConceptsCount > 0) {
        // Ha van vessző (tehát több fogalom is kellett volna), kiírjuk mit vártunk
        const expectedHint = q.correctAnswer.replace(/\|/g, 'or');
        return {
          status: 'partial',
          feedback: `You are on the right track, but missed a detail. (Hint: Make sure to mention concepts like: ${expectedHint})`,
        };
      } else {
        return {
          status: 'incorrect',
          feedback: `Not quite. Try to listen for keywords related to: ${q.correctAnswer.replace(/\|/g, 'or')}`,
        };
      }
    });

    // 500ms késleltetés a "gondolkodás" szimulálására
    return of(results);
  }
}
