import { TestBed, inject } from '@angular/core/testing';

import { DaneService } from './dane.service';

describe('DaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaneService]
    });
  });

  it('should ...', inject([DaneService], (service: DaneService) => {
    expect(service).toBeTruthy();
  }));
});
