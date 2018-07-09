import { TestBed, inject } from '@angular/core/testing';

import { CompanyListService } from './company-list.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyListService]
    });
  });

  it('should be created', inject([CompanyListService], (service: CompanyListService) => {
    expect(service).toBeTruthy();
  }));
});
