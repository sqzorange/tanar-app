import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTrueFalseImage } from './task-true-false-image';

describe('TaskTrueFalseImage', () => {
  let component: TaskTrueFalseImage;
  let fixture: ComponentFixture<TaskTrueFalseImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTrueFalseImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTrueFalseImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
