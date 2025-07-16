import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCompanyComponent } from './subscription-company.component';

describe('SubscriptionCompanyComponent', () => {
  let component: SubscriptionCompanyComponent;
  let fixture: ComponentFixture<SubscriptionCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionCompanyComponent]
    });
    fixture = TestBed.createComponent(SubscriptionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
