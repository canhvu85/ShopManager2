import { TestBed } from '@angular/core/testing';

import { ImportProductService } from './import-product.service';

describe('ImportProductService', () => {
  let service: ImportProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
