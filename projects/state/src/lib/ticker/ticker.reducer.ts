import { createReducer, on } from "@ngrx/store";
import { TickerState } from "./ticker.state";
import { clearSelectedTicker, setSelectedTicker } from "./ticker.actions";

export const initialState: TickerState = { ticker: null }


export const tickerReducer = createReducer(
    initialState,
    on(setSelectedTicker, (state, { symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
        dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate }) => ({
            ...state,
            ticker: {
                symbol, companyName, buyPrice, sellPrice, preMarketPrice, previousClosePrice, openPrice,
                dayMin, dayMax, yearMin, yearMax, marketCap, forwardDividend, exDividendDate
            }
        })),
    on(clearSelectedTicker, () => initialState)
);