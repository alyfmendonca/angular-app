import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TussTableComponent } from './tuss-table.component';

describe('TussTableComponent', () => {
  let component: TussTableComponent;
  let fixture: ComponentFixture<TussTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TussTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TussTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
