import { TestBed } from '@angular/core/testing';

import { AiGrading } from './ai-grading';

describe('AiGrading', () => {
  let service: AiGrading;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiGrading);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
