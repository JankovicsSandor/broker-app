import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Ticker, TickerState, getSelectedStockSymbol, getTicker, setSelectedStockAction } from '@state';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-selected-asset',
  templateUrl: './selected-asset.component.html',
  styleUrls: ['./selected-asset.component.scss']
})
export class SelectedAssetComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();
  //selectedStock$: Observable<Ticker | null>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private tradeStore: Store<TickerState>) {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['id']) {
        this.store.dispatch(setSelectedStockAction({ stockSymbol: params['id'] }))
      }
    });
    this.tradeStore.select(getTicker).subscribe((val)=>console.log(val));
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
