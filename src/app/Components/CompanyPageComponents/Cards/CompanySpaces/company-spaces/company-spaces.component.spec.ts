import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySpacesComponent } from './company-spaces.component';

describe('CompanySpacesComponent', () => {
  let component: CompanySpacesComponent;
  let fixture: ComponentFixture<CompanySpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanySpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
