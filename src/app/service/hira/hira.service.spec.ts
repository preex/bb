import { TestBed, inject } from '@angular/core/testing';

import { HiraService } from './hira.service';

describe('HiraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiraService]
    });
  });

  it('should be created', inject([HiraService], (service: HiraService) => {
    expect(service).toBeTruthy();
  }));
});
