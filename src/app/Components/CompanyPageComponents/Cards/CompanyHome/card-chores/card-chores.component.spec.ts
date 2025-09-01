import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChoresComponent } from './card-chores.component';

describe('CardChoresComponent', () => {
  let component: CardChoresComponent;
  let fixture: ComponentFixture<CardChoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
