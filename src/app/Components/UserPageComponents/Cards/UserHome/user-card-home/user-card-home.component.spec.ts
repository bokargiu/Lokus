import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardHomeComponent } from './user-card-home.component';

describe('UserCardHomeComponent', () => {
  let component: UserCardHomeComponent;
  let fixture: ComponentFixture<UserCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
