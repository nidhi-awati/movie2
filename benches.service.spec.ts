import { TestBed } from '@angular/core/testing';

import { BenchesService } from './benches.service';

describe('BenchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenchesService = TestBed.get(BenchesService);
    expect(service).toBeTruthy();
  });
});
