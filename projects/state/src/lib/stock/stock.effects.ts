import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, mergeMap, withLatestFrom } from "rxjs";
import { updateStockSellPriceAction } from "./stock.actions";
import { selectUserWallet } from "../user";
import { Store } from "@ngrx/store";
import { AppState } from "../core";
import { updateChangePercentForTransaction } from "../transaction";


@Injectable()
export class StockEffects {

    updateStockTransactionSellPriceEffect$ = createEffect(() => this.actions$.pipe(
        ofType(updateStockSellPriceAction),
        withLatestFrom(this.store.select(selectUserWallet)),
        mergeMap(([{ stockSymbol, sellPrice }, userWallet]) => {
            let openTransactionsForSymbol = userWallet.transactions.filter(e => e.symbol == stockSymbol && e.direction == "BUY");
            if (openTransactionsForSymbol.length > 0) {
                let returnActionArray = [];
                for (const transaction of openTransactionsForSymbol) {
                    returnActionArray.push(updateChangePercentForTransaction({ changePercent: (sellPrice / transaction.buyPrice)-1, transactionId: transaction.transactionId, sellPrice: sellPrice }))
                }
                return returnActionArray;
            } else {
                return EMPTY;
            }

        })
    ))

    constructor(private actions$: Actions,
        private store: Store<AppState>) { }
}
