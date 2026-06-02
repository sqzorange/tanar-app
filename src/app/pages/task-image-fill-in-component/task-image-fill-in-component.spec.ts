import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskImageFillInComponent } from './task-image-fill-in-component';

describe('TaskImageFillInComponent', () => {
  let component: TaskImageFillInComponent;
  let fixture: ComponentFixture<TaskImageFillInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskImageFillInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskImageFillInComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
