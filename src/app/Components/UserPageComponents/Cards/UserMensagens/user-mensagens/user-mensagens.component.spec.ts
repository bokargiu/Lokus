import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMensagensComponent } from './user-mensagens.component';

describe('UserMensagensComponent', () => {
  let component: UserMensagensComponent;
  let fixture: ComponentFixture<UserMensagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMensagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
