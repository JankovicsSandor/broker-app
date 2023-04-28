import { TestBed } from '@angular/core/testing';

import { StockHttpClientService } from './stock-http-client.service';

describe('StockHttpClientService', () => {
  let service: StockHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
