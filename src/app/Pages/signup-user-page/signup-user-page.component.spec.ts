import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserPageComponent } from './signup-user-page.component';

describe('SignupUserPageComponent', () => {
  let component: SignupUserPageComponent;
  let fixture: ComponentFixture<SignupUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupUserPageComponent]
    });
    fixture = TestBed.createComponent(SignupUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
