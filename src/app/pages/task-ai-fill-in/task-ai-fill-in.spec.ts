import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAiFillIn } from './task-ai-fill-in';

describe('TaskAiFillIn', () => {
  let component: TaskAiFillIn;
  let fixture: ComponentFixture<TaskAiFillIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAiFillIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAiFillIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
