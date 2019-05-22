import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSurgeonsComponent } from './all-surgeons.component';

describe('AllSurgeonsComponent', () => {
  let component: AllSurgeonsComponent;
  let fixture: ComponentFixture<AllSurgeonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSurgeonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSurgeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
