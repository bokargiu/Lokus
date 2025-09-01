import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPageInterfaceComponent } from './company-page-interface.component';

describe('CompanyPageInterfaceComponent', () => {
  let component: CompanyPageInterfaceComponent;
  let fixture: ComponentFixture<CompanyPageInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPageInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyPageInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
