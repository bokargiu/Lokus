import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarAreaComponent } from './search-bar-area.component';

describe('SearchBarAreaComponent', () => {
  let component: SearchBarAreaComponent;
  let fixture: ComponentFixture<SearchBarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
