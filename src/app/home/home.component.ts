import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { insertStockAction, selectAllStocks, AppState, Stock } from '@state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.select(selectAllStocks).subscribe((val) => console.log(val));

  }
  ngOnInit(): void {
    let newStock: Stock = <Stock>{ buyPrice: 123, sellPrice: 120, companyName: "Apple Inc.", symbol: "AAPL" };
    this.store.dispatch(insertStockAction(newStock));
  }

  addStock(): void {
    let newStock: Stock = <Stock>{ buyPrice: 123, sellPrice: 120, companyName: "Apple Inc.", symbol: this.generateRandomString(4) };
    this.store.dispatch(insertStockAction(newStock));
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
