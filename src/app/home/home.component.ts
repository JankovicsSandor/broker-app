import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { insertStockAction, selectAllStocks, AppState, Stock } from '@state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
}
