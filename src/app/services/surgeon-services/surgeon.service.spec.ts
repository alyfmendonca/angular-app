import { TestBed } from '@angular/core/testing';

import { SurgeonService } from './surgeon.service';

describe('SurgeonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurgeonService = TestBed.get(SurgeonService);
    expect(service).toBeTruthy();
  });
});
