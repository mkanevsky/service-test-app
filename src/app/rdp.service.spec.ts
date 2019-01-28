import { TestBed } from '@angular/core/testing';

import { RdpService } from './rdp.service';

describe('RdpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RdpService = TestBed.get(RdpService);
    expect(service).toBeTruthy();
  });
});
