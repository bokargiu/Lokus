import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReservationComponent } from './company-reservation.component';

describe('CompanyReservationComponent', () => {
  let component: CompanyReservationComponent;
  let fixture: ComponentFixture<CompanyReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
