import { TestBed, inject } from '@angular/core/testing';

import { RandomStringService } from './random-string.service';

describe('RandomStringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomStringService]
    });
  });

  it('should be created', inject([RandomStringService], (service: RandomStringService) => {
    expect(service).toBeTruthy();
  }));
});
