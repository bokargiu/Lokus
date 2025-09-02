import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddDialogComponent } from './card-add-dialog.component';

describe('CardAddDialogComponent', () => {
  let component: CardAddDialogComponent;
  let fixture: ComponentFixture<CardAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
