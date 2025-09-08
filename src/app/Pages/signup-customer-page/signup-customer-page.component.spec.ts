import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCostumerPageComponent } from './signup-customer-page.component';

describe('SignupCostumerPageComponent', () => {
  let component: SignupCostumerPageComponent;
  let fixture: ComponentFixture<SignupCostumerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupCostumerPageComponent]
    });
    fixture = TestBed.createComponent(SignupCostumerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
