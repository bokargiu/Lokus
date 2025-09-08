import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphicHistogramComponent } from './card-graphic-histogram.component';

describe('CardGraphicHistogramComponent', () => {
  let component: CardGraphicHistogramComponent;
  let fixture: ComponentFixture<CardGraphicHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGraphicHistogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardGraphicHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
