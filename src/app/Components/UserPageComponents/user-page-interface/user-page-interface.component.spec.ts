import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageInterfaceComponent } from './user-page-interface.component';

describe('UserPageInterfaceComponent', () => {
  let component: UserPageInterfaceComponent;
  let fixture: ComponentFixture<UserPageInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPageInterfaceComponent]
    });
    fixture = TestBed.createComponent(UserPageInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
