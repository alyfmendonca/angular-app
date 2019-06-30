import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonDetailsAcceptComponent } from './surgeon-details-accept.component';

describe('SurgeonDetailsAcceptComponent', () => {
  let component: SurgeonDetailsAcceptComponent;
  let fixture: ComponentFixture<SurgeonDetailsAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeonDetailsAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonDetailsAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
