import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskImageTable } from './task-image-table';

describe('TaskImageTable', () => {
  let component: TaskImageTable;
  let fixture: ComponentFixture<TaskImageTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskImageTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskImageTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
