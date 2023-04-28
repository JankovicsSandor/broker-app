import { createReducer, on } from "@ngrx/store";
import { TickerState } from "./ticker.state";
import { clearSelectedTicker, selectTickerLoadFinishedFail, selectTickerLoadFinishedSuccess, selectTickerLoadInitiated } from "./ticker.actions";

export const tickerInitialState: TickerState = { ticker: null, isLoading: false }


export const tickerReducer = createReducer(
    tickerInitialState,
    on(selectTickerLoadInitiated, (_) => ({
        ticker: null,
        isLoading: true
    })),
    on(selectTickerLoadFinishedSuccess, (state, { symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
        dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate }) => ({
            ...state,
            isLoading: false,
            ticker: {
                symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
                dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate
            }
        })),
    on(selectTickerLoadFinishedFail, (_) => ({
        ticker: null,
        isLoading: false
    })),
    on(clearSelectedTicker, () => tickerInitialState)
);