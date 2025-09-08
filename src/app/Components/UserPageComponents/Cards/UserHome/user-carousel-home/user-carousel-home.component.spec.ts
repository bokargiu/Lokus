import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarouselHomeComponent } from './user-carousel-home.component';

describe('UserCarouselHomeComponent', () => {
  let component: UserCarouselHomeComponent;
  let fixture: ComponentFixture<UserCarouselHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCarouselHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCarouselHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
