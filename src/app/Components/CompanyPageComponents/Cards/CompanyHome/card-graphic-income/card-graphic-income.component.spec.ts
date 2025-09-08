import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphicIncomeComponent } from './card-graphic-income.component';

describe('CardGraphicIncomeComponent', () => {
  let component: CardGraphicIncomeComponent;
  let fixture: ComponentFixture<CardGraphicIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGraphicIncomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardGraphicIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
