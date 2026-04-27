import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicThree } from './topic-three';

describe('TopicThree', () => {
  let component: TopicThree;
  let fixture: ComponentFixture<TopicThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
