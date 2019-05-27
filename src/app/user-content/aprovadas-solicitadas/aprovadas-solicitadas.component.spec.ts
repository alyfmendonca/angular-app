import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadasSolicitadasComponent } from './aprovadas-solicitadas.component';

describe('AprovadasSolicitadasComponent', () => {
  let component: AprovadasSolicitadasComponent;
  let fixture: ComponentFixture<AprovadasSolicitadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovadasSolicitadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadasSolicitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
