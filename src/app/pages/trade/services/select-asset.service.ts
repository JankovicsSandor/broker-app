import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, TickerState, getSelectedStockSymbol, selectTickerLoadInitiated } from '@state';

@Injectable()
export class SelectAssetService {

  constructor(private appStateStore: Store<AppState>, private assetSubStore: Store<TickerState>) {
    this.appStateStore.select(getSelectedStockSymbol).subscribe((sybmol) => {
      if (sybmol) {
        this.assetSubStore.dispatch(selectTickerLoadInitiated({ tickerSymbol: sybmol }));
      }
    })
  }
}
