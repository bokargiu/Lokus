import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClientPageComponent } from './signup-customer-page.component';

describe('SignupClientPageComponent', () => {
  let component: SignupClientPageComponent;
  let fixture: ComponentFixture<SignupClientPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupClientPageComponent]
    });
    fixture = TestBed.createComponent(SignupClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
