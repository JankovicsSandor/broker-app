import { NgModule } from '@angular/core';
import { StockHttpClientService } from './stock/stock-http-client.service';
import { TransactionHttpClientService } from './transaction/transaction-http-client.service';



@NgModule({
  providers: [StockHttpClientService, TransactionHttpClientService]
})
export class DataProviderModule { }
