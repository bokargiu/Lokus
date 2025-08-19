import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizeNearMapComponent } from './localize-near-map.component';

describe('LocalizeNearMapComponent', () => {
  let component: LocalizeNearMapComponent;
  let fixture: ComponentFixture<LocalizeNearMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalizeNearMapComponent]
    });
    fixture = TestBed.createComponent(LocalizeNearMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
