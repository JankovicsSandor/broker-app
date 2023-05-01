import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { AppState, NewTransaction, Stock, addNewTransactionInitiated, insertStockAction, selectAllStocks } from '@state';
import { Observable } from 'rxjs';
import { TradeService } from './services/trade.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  stockList$: Observable<Stock[]>;
  constructor(private store: Store<AppState>, private tradeService: TradeService) {
    this.stockList$ = this.store.select(selectAllStocks);

  }

  ngOnInit(): void {
    let newStock: Stock = <Stock>{ buyPrice: 123, sellPrice: 120, companyName: "Apple Inc.", symbol: "AAPL" };
    this.store.dispatch(insertStockAction({ stock: newStock }));
  }
  addStock(): void {
    let newStock: Stock = <Stock>{ buyPrice: 123, sellPrice: 120, companyName: "Apple Inc.", symbol: this.generateRandomString(4) };
    this.store.dispatch(insertStockAction({ stock: newStock }));
  }

  performBuyAction(stock: Stock) {
    let action = <NewTransaction>{ actionPrice: stock.buyPrice, amount: 1, direction: "BUY", symbol: stock.symbol, transactionDate: new Date() };
    this.tradeService.performTrade(action);
  }

  generateRandomString(length: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }
}
