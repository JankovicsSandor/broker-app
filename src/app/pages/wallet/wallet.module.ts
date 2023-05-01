import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    WalletComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    CardModule,
    ProgressBarModule
  ]
})
export class WalletModule { }
