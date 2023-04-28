import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TickerState } from "./ticker.state";
import { tickerFeatureName } from "./ticker.reducer";

// feature selector
export const selectTickerState = createFeatureSelector<TickerState>(
    tickerFeatureName
);

export const getTickerIsLoading = createSelector(
    selectTickerState,
    (state: TickerState) => state.isLoading
);

export const getTicker = createSelector(
    selectTickerState,
    (state: TickerState) => state.ticker
);

// view model selector
export const getTickerPageViewModel = createSelector(
    getTicker,
    getTickerIsLoading,
    (ticker, loading) => ({ ticker, loading })
  );
