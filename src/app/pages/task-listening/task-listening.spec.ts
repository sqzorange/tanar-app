import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListening } from './task-listening';

describe('TaskListening', () => {
  let component: TaskListening;
  let fixture: ComponentFixture<TaskListening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListening);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
