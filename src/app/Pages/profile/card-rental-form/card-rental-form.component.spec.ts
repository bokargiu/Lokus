import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRentalFormComponent } from './card-rental-form.component';

describe('CardRentalFormComponent', () => {
  let component: CardRentalFormComponent;
  let fixture: ComponentFixture<CardRentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRentalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
