import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StablishmentListPageComponent } from './stablishment-list-page.component';

describe('StablishmentListPageComponent', () => {
  let component: StablishmentListPageComponent;
  let fixture: ComponentFixture<StablishmentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StablishmentListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StablishmentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
