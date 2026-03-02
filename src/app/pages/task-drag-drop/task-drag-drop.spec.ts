import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDragDrop } from './task-drag-drop';

describe('TaskDragDrop', () => {
  let component: TaskDragDrop;
  let fixture: ComponentFixture<TaskDragDrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDragDrop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDragDrop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
