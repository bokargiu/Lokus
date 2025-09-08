import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoxFeedbackComponent } from './card-box-feedback.component';

describe('CardBoxFeedbackComponent', () => {
  let component: CardBoxFeedbackComponent;
  let fixture: ComponentFixture<CardBoxFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBoxFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBoxFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
