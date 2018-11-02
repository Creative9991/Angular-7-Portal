import { TestBed, inject } from '@angular/core/testing';

import { LocaldatasericeService } from './localdataserice.service';

describe('LocaldatasericeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaldatasericeService]
    });
  });

  it('should be created', inject([LocaldatasericeService], (service: LocaldatasericeService) => {
    expect(service).toBeTruthy();
  }));
});