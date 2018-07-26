import { TestBed, inject } from '@angular/core/testing';

import { HiraHospitalService } from './hira-hospital.service';

describe('HiraHospitalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiraHospitalService]
    });
  });

  it('should be created', inject([HiraHospitalService], (service: HiraHospitalService) => {
    expect(service).toBeTruthy();
  }));
});
