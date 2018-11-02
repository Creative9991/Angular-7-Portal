import { TestBed, inject } from '@angular/core/testing';

import { ConstantdataService } from './constantdata.service';

describe('ContantdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantdataService]
    });
  });

  it('should be created', inject([ConstantdataService], (service: ConstantdataService) => {
    expect(service).toBeTruthy();
  }));
});