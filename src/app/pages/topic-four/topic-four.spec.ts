import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFour } from './topic-four';

describe('TopicFour', () => {
  let component: TopicFour;
  let fixture: ComponentFixture<TopicFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
