import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTwo } from './topic-two';

describe('TopicTwo', () => {
  let component: TopicTwo;
  let fixture: ComponentFixture<TopicTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
