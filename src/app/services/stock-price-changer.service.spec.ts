import { TestBed } from '@angular/core/testing';

import { StockPriceChangerService } from './stock-price-changer.service';

describe('StockPriceChangerService', () => {
  let service: StockPriceChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPriceChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
