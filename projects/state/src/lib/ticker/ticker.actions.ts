import { createAction, props } from "@ngrx/store";
import { Ticker } from "./ticker.state";

export const selectTickerLoadInitiated = createAction("[Ticker] Select ticker Load Initiated", props<{ tickerSymbol: string }>());
export const selectTickerLoadFinishedSuccess = createAction("[Ticker] Selected Ticker Loaded Success", props<{ ticker: Ticker }>());
export const selectTickerLoadFinishedFail = createAction("[Ticker] Selected Ticker Loaded Fail");
export const clearSelectedTicker = createAction('[Ticker] Clear Selected Ticker');