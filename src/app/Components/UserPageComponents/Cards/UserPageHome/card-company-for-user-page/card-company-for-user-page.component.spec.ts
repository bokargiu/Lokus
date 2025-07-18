import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompanyForUserPageComponent } from './card-company-for-user-page.component';

describe('CardCompanyForUserPageComponent', () => {
  let component: CardCompanyForUserPageComponent;
  let fixture: ComponentFixture<CardCompanyForUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompanyForUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCompanyForUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
