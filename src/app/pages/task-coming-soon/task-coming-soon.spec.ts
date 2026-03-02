import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComingSoon } from './task-coming-soon';

describe('TaskComingSoon', () => {
  let component: TaskComingSoon;
  let fixture: ComponentFixture<TaskComingSoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComingSoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskComingSoon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
