import { createSelector } from "@ngrx/store";
import { TickerState } from "./ticker.state";

export const selectTickerState = (state: TickerState) => state;

export const getTickerIsLoading = createSelector(
    selectTickerState,
    (state: TickerState) => state.isLoading
);

export const getTicker = createSelector(
    selectTickerState,
    (state: TickerState) => state.ticker
);
