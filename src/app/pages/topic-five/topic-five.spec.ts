import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFive } from './topic-five';

describe('TopicFive', () => {
  let component: TopicFive;
  let fixture: ComponentFixture<TopicFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicFive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
