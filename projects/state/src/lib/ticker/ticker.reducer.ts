import { createReducer, on } from "@ngrx/store";
import { TickerState } from "./ticker.state";
import { clearSelectedTicker, setSelectedTicker } from "./ticker.actions";

export const tickerInitialState: TickerState = { ticker: null, isLoading: false }


export const tickerReducer = createReducer(
    tickerInitialState,
    on(setSelectedTicker, (state, { symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
        dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate }) => ({
            ...state,
            isLoading: false,
            ticker: {
                symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
                dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate
            }
        })),
    on(clearSelectedTicker, () => tickerInitialState)
);