import { TestBed, inject } from '@angular/core/testing';

import { HiraPhamacyService } from './hira-phamacy.service';

describe('HiraPhamacyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiraPhamacyService]
    });
  });

  it('should be created', inject([HiraPhamacyService], (service: HiraPhamacyService) => {
    expect(service).toBeTruthy();
  }));
});
