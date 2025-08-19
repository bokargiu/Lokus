import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBalanceCardComponent } from './user-balance-card.component';

describe('UserBalanceCardComponent', () => {
  let component: UserBalanceCardComponent;
  let fixture: ComponentFixture<UserBalanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBalanceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBalanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
