import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurgeonComponent } from './new-surgeon.component';

describe('NewSurgeonComponent', () => {
  let component: NewSurgeonComponent;
  let fixture: ComponentFixture<NewSurgeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurgeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurgeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
