import { Injectable } from '@angular/core';
import { STOCK_MOCK_DATA } from '../mock-database/database.class';
import { delay, map, pipe } from 'rxjs';

@Injectable()
export class StockHttpClientService {

  constructor() { }


  getSelectedStockData(symbol: string) {
    let delayNumber = Math.random() * (1000 - 100) + 100;
    return STOCK_MOCK_DATA.pipe(delay(delayNumber), pipe(map((data) => {
      let selectedData = data.find(e => e.symbol.toLowerCase() == symbol.toLowerCase());
      if (selectedData) {
        return selectedData
      } else {
        throw new Error("Symbol not found.");
      }
    })));
  }
}
