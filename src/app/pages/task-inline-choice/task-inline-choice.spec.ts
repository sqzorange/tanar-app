import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInlineChoice } from './task-inline-choice';

describe('TaskInlineChoice', () => {
  let component: TaskInlineChoice;
  let fixture: ComponentFixture<TaskInlineChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInlineChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInlineChoice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
