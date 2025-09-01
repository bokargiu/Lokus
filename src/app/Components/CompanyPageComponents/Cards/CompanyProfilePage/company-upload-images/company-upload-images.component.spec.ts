import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUploadImagesComponent } from './company-upload-images.component';

describe('CompanyUploadImagesComponent', () => {
  let component: CompanyUploadImagesComponent;
  let fixture: ComponentFixture<CompanyUploadImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyUploadImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyUploadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
