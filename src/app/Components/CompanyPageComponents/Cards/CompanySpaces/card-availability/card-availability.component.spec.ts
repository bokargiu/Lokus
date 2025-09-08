import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvailabilityComponent } from './card-availability.component';

describe('CardAvailabilityComponent', () => {
  let component: CardAvailabilityComponent;
  let fixture: ComponentFixture<CardAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
