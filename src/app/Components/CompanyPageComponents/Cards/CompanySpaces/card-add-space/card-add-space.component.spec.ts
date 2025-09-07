import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddSpaceComponent } from './card-add-space.component';

describe('CardAddSpaceComponent', () => {
  let component: CardAddSpaceComponent;
  let fixture: ComponentFixture<CardAddSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAddSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
