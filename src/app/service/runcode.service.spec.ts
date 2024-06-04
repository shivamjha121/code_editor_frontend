import { TestBed } from '@angular/core/testing';

import { RuncodeService } from './runcode.service';

describe('RuncodeService', () => {
  let service: RuncodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuncodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
