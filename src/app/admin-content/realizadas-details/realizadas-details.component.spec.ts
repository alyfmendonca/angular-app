import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadasDetailsComponent } from './realizadas-details.component';

describe('RealizadasDetailsComponent', () => {
  let component: RealizadasDetailsComponent;
  let fixture: ComponentFixture<RealizadasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizadasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizadasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
