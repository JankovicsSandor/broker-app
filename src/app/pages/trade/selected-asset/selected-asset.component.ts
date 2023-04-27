import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getSelectedStockSymbol, setSelectedStockAction } from '@state';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-selected-asset',
  templateUrl: './selected-asset.component.html',
  styleUrls: ['./selected-asset.component.scss']
})
export class SelectedAssetComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();
  selectedStockSymbol$: Observable<string|null>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['id']) {
        this.store.dispatch(setSelectedStockAction({ stockSymbol: params['id'] }))
      }
    });
    this.selectedStockSymbol$=this.store.select(getSelectedStockSymbol)
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
