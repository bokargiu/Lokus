import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListSpaceComponent } from './card-list-space.component';

describe('CardListSpaceComponent', () => {
  let component: CardListSpaceComponent;
  let fixture: ComponentFixture<CardListSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
