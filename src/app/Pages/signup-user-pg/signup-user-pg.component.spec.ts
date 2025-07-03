import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserPgComponent } from './signup-user-pg.component';

describe('SignupUserPgComponent', () => {
  let component: SignupUserPgComponent;
  let fixture: ComponentFixture<SignupUserPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupUserPgComponent]
    });
    fixture = TestBed.createComponent(SignupUserPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
