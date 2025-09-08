import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisitsComponent } from './card-visits.component';

describe('CardVisitsComponent', () => {
  let component: CardVisitsComponent;
  let fixture: ComponentFixture<CardVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVisitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
