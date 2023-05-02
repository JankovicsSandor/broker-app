import { createReducer, on } from "@ngrx/store";
import { StockState } from "./stock.state";
import { clearSelectedStockAction, insertStockAction, setSelectedStockAction, setStockAction, updateStockBuyPriceAction, updateStockSellPriceAction } from "./stock.actions";


export const stockInitialState: StockState = { selectedStockSymbol: null, stocks: [] }

export const stockReducer = createReducer(
    stockInitialState,
    on(insertStockAction, (state, { stock }) => ({
        ...state, stocks: [...state.stocks, stock]
    })),
    on(setStockAction, (state, { stocks }) => ({
        ...state,
        stocks: stocks
    })),
    on(setSelectedStockAction, (state, { stockSymbol }) => ({
        ...state, selectedStockSymbol: stockSymbol
    })),
    on(updateStockBuyPriceAction, (state, { stockSymbol, buyPrice }) => ({
        ...state, stocks: state.stocks.map((stock) => stock.symbol === stockSymbol ? { ...stock, buyPrice } : stock)
    })),
    on(updateStockSellPriceAction, (state, { stockSymbol, sellPrice }) => ({
        ...state, stocks: state.stocks.map((stock) => stock.symbol === stockSymbol ? { ...stock, sellPrice } : stock)
    })),
    on(clearSelectedStockAction, (state) => ({
        ...state,
        selectedStockSymbol: null
    })),
);
