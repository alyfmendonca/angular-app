import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDetailsComponent } from './solicitacoes-details.component';

describe('SolicitacoesDetailsComponent', () => {
  let component: SolicitacoesDetailsComponent;
  let fixture: ComponentFixture<SolicitacoesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacoesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
