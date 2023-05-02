import { Injectable } from '@angular/core';
import { GenerateGuid } from '@helper-functions';
import { NewTransaction, OpenTransaction } from '@state';
import { of } from 'rxjs';

@Injectable()
export class TransactionHttpClientService {

  constructor() { }

  addNewTransaction(transaction: NewTransaction) {
    return of(<OpenTransaction>{ ...transaction, transactionId: GenerateGuid(), changePercent: this.getChangePercent(transaction), currentValue: transaction.amount * transaction.sellPrice })
  }


  getChangePercent(transaction: NewTransaction): number {
    const currentValue = transaction.amount * transaction.sellPrice;
    const investedAmount = transaction.amount * transaction.buyPrice;

    return (currentValue / investedAmount)-1;
  }
}
