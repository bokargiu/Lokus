import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomAdBarComponent } from './buttom-ad-bar.component';

describe('ButtomAdBarComponent', () => {
  let component: ButtomAdBarComponent;
  let fixture: ComponentFixture<ButtomAdBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtomAdBarComponent]
    });
    fixture = TestBed.createComponent(ButtomAdBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
