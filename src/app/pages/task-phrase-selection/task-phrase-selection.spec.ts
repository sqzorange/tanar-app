import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPhraseSelection } from './task-phrase-selection';

describe('TaskPhraseSelection', () => {
  let component: TaskPhraseSelection;
  let fixture: ComponentFixture<TaskPhraseSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPhraseSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPhraseSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
