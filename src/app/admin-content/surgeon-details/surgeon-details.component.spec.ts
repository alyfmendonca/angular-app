import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonDetailsComponent } from './surgeon-details.component';

describe('SurgeonDetailsComponent', () => {
  let component: SurgeonDetailsComponent;
  let fixture: ComponentFixture<SurgeonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
