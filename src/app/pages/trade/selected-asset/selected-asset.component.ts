import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Ticker, TickerState, getTicker, getTickerPageViewModel, setSelectedStockAction } from '@state';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-selected-asset',
  templateUrl: './selected-asset.component.html',
  styleUrls: ['./selected-asset.component.scss']
})
export class SelectedAssetComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();
  selectedStockVM$: Observable<{ ticker: Ticker | null; loading: boolean; }>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private tradeStore: Store<TickerState>) {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['id']) {
        this.store.dispatch(setSelectedStockAction({ stockSymbol: params['id'] }))
      }
    });
    this.selectedStockVM$ = this.tradeStore.select(getTickerPageViewModel);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
