import { createAction, props } from "@ngrx/store";
import { Ticker } from "./ticker.state";

export const setSelectedTicker = createAction("[Ticker] Set Selected Ticker", props<Ticker>());

export const clearSelectedTicker = createAction('[Ticker] Clear Selected Ticker');