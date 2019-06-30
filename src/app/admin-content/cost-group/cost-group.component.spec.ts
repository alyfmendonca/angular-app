import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostGroupComponent } from './cost-group.component';

describe('CostGroupComponent', () => {
  let component: CostGroupComponent;
  let fixture: ComponentFixture<CostGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
