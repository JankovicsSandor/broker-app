import { TestBed } from '@angular/core/testing';

import { SelectAssetService } from './select-asset.service';

describe('SelectAssetService', () => {
  let service: SelectAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
