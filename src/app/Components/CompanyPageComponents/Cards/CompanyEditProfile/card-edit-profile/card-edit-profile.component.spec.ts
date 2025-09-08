import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditProfileComponent } from './card-edit-profile.component';

describe('CardEditProfileComponent', () => {
  let component: CardEditProfileComponent;
  let fixture: ComponentFixture<CardEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEditProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
