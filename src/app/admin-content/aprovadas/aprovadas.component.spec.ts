import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadasComponent } from './aprovadas.component';

describe('AprovadasComponent', () => {
  let component: AprovadasComponent;
  let fixture: ComponentFixture<AprovadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
