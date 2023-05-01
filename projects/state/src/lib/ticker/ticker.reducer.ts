import { createReducer, on } from "@ngrx/store";
import { TickerState } from "./ticker.state";
import { clearSelectedTicker, selectTickerLoadFinishedFail, selectTickerLoadFinishedSuccess, selectTickerLoadInitiated } from "./ticker.actions";

export const tickerFeatureName = "assets";
export const tickerInitialState: TickerState = { ticker: null, isLoading: false }


export const tickerReducer = createReducer(
    tickerInitialState,
    on(selectTickerLoadInitiated, (_) => ({
        ticker: null,
        isLoading: true
    })),
    on(selectTickerLoadFinishedSuccess, (state, { ticker }) => ({
        ...state,
        isLoading: false,
        ticker
    })),
    on(selectTickerLoadFinishedFail, (_) => ({
        ticker: null,
        isLoading: false
    })),
    on(clearSelectedTicker, () => tickerInitialState)
);