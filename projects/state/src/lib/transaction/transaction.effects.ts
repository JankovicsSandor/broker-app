import { Injectable } from "@angular/core";
import { TransactionHttpClientService } from "@data-provider";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { addNewTransactionFinishedSuccess, addNewTransactionInitiated } from "./transaction.actions";
import { MessageService } from "primeng/api";

@Injectable()
export class TransactionEffects {

    loadSelectedTicker$ = createEffect(() => this.actions$.pipe(
        ofType(addNewTransactionInitiated),
        mergeMap(({ transaction }) => this.transactionService.addNewTransaction(transaction).pipe(
            map((resultData) => addNewTransactionFinishedSuccess({ result: resultData })),
            catchError((err) => {
                console.error("Transaction failed to execute");
                this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
                return EMPTY
                //return [selectTickerLoadFinishedFail()]
            })
        ))
    ))

    constructor(private actions$: Actions, private transactionService: TransactionHttpClientService, private messageService: MessageService) { }
}
