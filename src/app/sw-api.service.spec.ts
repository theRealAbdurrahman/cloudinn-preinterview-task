import { TestBed, inject } from '@angular/core/testing';

import { SwAPIService } from './sw-api.service';

describe('SwAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwAPIService]
    });
  });

  it('should be created', inject([SwAPIService], (service: SwAPIService) => {
    expect(service).toBeTruthy();
  }));
});
