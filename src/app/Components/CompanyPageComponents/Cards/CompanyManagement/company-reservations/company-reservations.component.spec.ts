import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReservationsComponent } from './company-reservations.component';

describe('CompanyReservationsComponent', () => {
  let component: CompanyReservationsComponent;
  let fixture: ComponentFixture<CompanyReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyReservationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
