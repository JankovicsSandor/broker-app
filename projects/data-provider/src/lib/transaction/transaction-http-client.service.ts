import { Injectable } from '@angular/core';
import { GenerateGuid } from '@helper-functions';
import { NewTransaction, OpenTransaction } from '@state';
import { of } from 'rxjs';

@Injectable()
export class TransactionHttpClientService {

  constructor() { }

  addNewTransaction(transaction: NewTransaction) {
    return of(<OpenTransaction>{ ...transaction, transactionId: GenerateGuid() })
  }
}
