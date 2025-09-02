import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpaceComponent } from './card-space.component';

describe('CardSpaceComponent', () => {
  let component: CardSpaceComponent;
  let fixture: ComponentFixture<CardSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
