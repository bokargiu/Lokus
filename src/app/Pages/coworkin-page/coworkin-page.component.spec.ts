import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkinPageComponent } from './coworkin-page.component';

describe('CoworkinPageComponent', () => {
  let component: CoworkinPageComponent;
  let fixture: ComponentFixture<CoworkinPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoworkinPageComponent]
    });
    fixture = TestBed.createComponent(CoworkinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
