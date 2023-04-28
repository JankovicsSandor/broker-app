import { Injectable } from "@angular/core";
import { StockHttpClientService } from "@data-provider";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { selectTickerLoadFinishedFail, selectTickerLoadFinishedSuccess, selectTickerLoadInitiated } from "./ticker.actions";
import { catchError, map, mergeMap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class TickerEffects {

    loadSelectedTicker$ = createEffect(() => this.actions$.pipe(
        ofType(selectTickerLoadInitiated),
        mergeMap(({ tickerSymbol }) => this.stockService.getSelectedStockData(tickerSymbol).pipe(
            map((symbolData) => selectTickerLoadFinishedSuccess(symbolData)),
            catchError(() => {
                this.router.navigate(['trade']);
                console.error("Symbol not found");
                return [selectTickerLoadFinishedFail()]
            })
        ))
    ))

    constructor(private actions$: Actions, private stockService: StockHttpClientService, private router: Router) { }
}
