import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalFormMockComponent } from './rental-form-mock.component';

describe('RentalFormMockComponent', () => {
  let component: RentalFormMockComponent;
  let fixture: ComponentFixture<RentalFormMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalFormMockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalFormMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
