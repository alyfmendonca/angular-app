import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOrientationComponent } from './request-orientation.component';

describe('RequestOrientationComponent', () => {
  let component: RequestOrientationComponent;
  let fixture: ComponentFixture<RequestOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
