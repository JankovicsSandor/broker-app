import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, OpenTransaction, User, selectUserWallet } from '@state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  walletUserTransaction$: Observable<{ user: User, transactions: OpenTransaction[] }>;


  constructor(private store: Store<AppState>) {
    this.walletUserTransaction$ = this.store.select(selectUserWallet);

  }
}
