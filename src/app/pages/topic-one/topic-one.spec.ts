import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicOne } from './topic-one';

describe('TopicOne', () => {
  let component: TopicOne;
  let fixture: ComponentFixture<TopicOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
