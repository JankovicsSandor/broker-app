import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, NewTransaction, addNewTransactionInitiated } from '@state';

@Injectable()
export class TradeService {

  constructor(private store: Store<AppState>) { }

  performTrade(transaction: NewTransaction) {
    this.store.dispatch(addNewTransactionInitiated({ transaction: transaction }));
  }
}
