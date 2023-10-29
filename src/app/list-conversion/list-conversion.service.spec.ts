import { TestBed } from '@angular/core/testing';

import { ListConversionService } from './list-conversion.service';

describe('ListConversionService', () => {
  let service: ListConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
