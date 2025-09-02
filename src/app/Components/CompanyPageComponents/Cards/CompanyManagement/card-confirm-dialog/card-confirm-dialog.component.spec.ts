import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmDialogComponent } from './card-confirm-dialog.component';

describe('CardConfirmDialogComponent', () => {
  let component: CardConfirmDialogComponent;
  let fixture: ComponentFixture<CardConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfirmDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
