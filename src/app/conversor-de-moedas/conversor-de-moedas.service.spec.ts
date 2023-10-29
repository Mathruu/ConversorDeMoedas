import { TestBed } from '@angular/core/testing';

import { ConversorDeMoedasService } from './conversor-de-moedas.service';

describe('ConversorDeMoedasService', () => {
  let service: ConversorDeMoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorDeMoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
