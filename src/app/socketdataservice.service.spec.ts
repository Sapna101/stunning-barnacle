import { TestBed } from '@angular/core/testing';

import { SocketdataserviceService } from './socketdataservice.service';

describe('SocketdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketdataserviceService = TestBed.get(SocketdataserviceService);
    expect(service).toBeTruthy();
  });
});
