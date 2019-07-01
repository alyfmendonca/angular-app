import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassForgotComponent } from './new-pass-forgot.component';

describe('NewPassForgotComponent', () => {
  let component: NewPassForgotComponent;
  let fixture: ComponentFixture<NewPassForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPassForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
