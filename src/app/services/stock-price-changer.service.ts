import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectAllStocks, updateStockBuyPriceAction, updateStockSellPriceAction } from '@state';
import { interval, map, withLatestFrom } from 'rxjs';

@Injectable()
export class StockPriceChangerService {

  readonly TICKER_PRICE_UPDATE_INTERVAL_MS: number = 1000;
  constructor(private store: Store<AppState>) {
    interval(this.TICKER_PRICE_UPDATE_INTERVAL_MS).pipe(withLatestFrom(this.store.select(selectAllStocks)), map(([_, allStock]) => {
      if (allStock.length > 0) {
        let randomIndex = this.getRandomInteger(0, allStock.length - 1)
        let randomDirectionMultiplier = this.getRandomInteger(0, 100) > 20 ? +1 : -1;
        let randomChange = this.getRandomNumber(0, 0.5);
        let actualStock = allStock[randomIndex];
        let buyPrice = (randomChange * randomDirectionMultiplier) + actualStock.buyPrice;
        let sellPrice = (randomChange * randomDirectionMultiplier) + actualStock.sellPrice;
        this.store.dispatch(updateStockBuyPriceAction({ buyPrice: buyPrice, stockSymbol: actualStock.symbol }))
        this.store.dispatch(updateStockSellPriceAction({ sellPrice: sellPrice, stockSymbol: actualStock.symbol }))
      }
    })).subscribe();
  }

  private getRandomInteger(min: number, max: number): number {
    return Math.floor(this.getRandomNumber(min, max));
  }

  private getRandomNumber(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }


}
