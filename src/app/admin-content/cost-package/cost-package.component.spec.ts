import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPackageComponent } from './cost-package.component';

describe('CostPackageComponent', () => {
  let component: CostPackageComponent;
  let fixture: ComponentFixture<CostPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
