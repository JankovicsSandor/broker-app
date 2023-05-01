import { TestBed } from '@angular/core/testing';

import { TransactionHttpClientService } from './transaction-http-client.service';

describe('TransactionHttpClientService', () => {
  let service: TransactionHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
