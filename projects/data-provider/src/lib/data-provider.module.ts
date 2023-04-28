import { NgModule } from '@angular/core';
import { StockHttpClientService } from './stock-http-client.service';



@NgModule({
  providers: [StockHttpClientService]
})
export class DataProviderModule { }
