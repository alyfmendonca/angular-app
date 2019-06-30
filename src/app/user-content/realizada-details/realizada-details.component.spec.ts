import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadaDetailsComponent } from './realizada-details.component';

describe('RealizadaDetailsComponent', () => {
  let component: RealizadaDetailsComponent;
  let fixture: ComponentFixture<RealizadaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizadaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizadaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
