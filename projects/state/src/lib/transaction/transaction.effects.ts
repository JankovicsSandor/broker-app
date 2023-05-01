import { Injectable } from "@angular/core";
import { TransactionHttpClientService } from "@data-provider";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap, withLatestFrom } from "rxjs";
import { addNewTransactionFinishedSuccess, addNewTransactionInitiated } from "./transaction.actions";
import { MessageService } from "primeng/api";
import { Store } from "@ngrx/store";
import { AppState } from "../core";
import { modifyUserBalance, selectUserBalance } from "../user";

@Injectable()
export class TransactionEffects {

    loadSelectedTicker$ = createEffect(() => this.actions$.pipe(
        ofType(addNewTransactionInitiated),
        withLatestFrom(this.store.select(selectUserBalance)),
        mergeMap(([{ transaction }, userBalance]) => {
            let totalPrice = transaction.actionPrice * transaction.amount;
            if (userBalance >= totalPrice) {
                return this.transactionService.addNewTransaction(transaction).pipe(
                    mergeMap((resultData) => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully executed' });
                        return [modifyUserBalance({amount: -1 * totalPrice}), addNewTransactionFinishedSuccess({ result: resultData })]
                    }),
                    catchError((err) => {
                        console.error("Transaction failed to execute");
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
                        return EMPTY
                        //return [selectTickerLoadFinishedFail()]
                    })
                )
            } else {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Not enough funds to perform this action. Expected balance: ${totalPrice}. Current balance: ${userBalance}` });
                return EMPTY
            }

        }

        )
    ))

    constructor(private actions$: Actions, private store: Store<AppState>,
        private transactionService: TransactionHttpClientService, private messageService: MessageService) { }
}
