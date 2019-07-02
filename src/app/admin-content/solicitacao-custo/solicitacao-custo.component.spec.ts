import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoCustoComponent } from './solicitacao-custo.component';

describe('SolicitacaoCustoComponent', () => {
  let component: SolicitacaoCustoComponent;
  let fixture: ComponentFixture<SolicitacaoCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
