import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskQuiz } from './task-quiz';

describe('TaskQuiz', () => {
  let component: TaskQuiz;
  let fixture: ComponentFixture<TaskQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
