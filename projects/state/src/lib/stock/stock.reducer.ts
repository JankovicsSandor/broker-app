import { createReducer, on } from "@ngrx/store";
import { Stock, StockState, adapter } from "./stock.state";
import { clearSelectedStockAction, insertStockAction, setSelectedStockAction, updateStockBuyPriceAction } from "./stock.actions";

export const stockInitialState: StockState = adapter.getInitialState({
    // additional entity state properties
    selectedStockSymbol: null,
});

export const stockReducer = createReducer(
    stockInitialState,
    on(insertStockAction, (state, { symbol, buyPrice, sellPrice, companyName }) => {
        return adapter.addOne(<Stock>{ symbol, buyPrice, sellPrice, companyName }, state);
    }),
    on(setSelectedStockAction, (state, { stockSymbol }) => ({
        ...state,
        selectedStockSymbol: stockSymbol
    })),
    on(updateStockBuyPriceAction, (state, { stockSymbol, buyPrice }) => {
        return adapter.updateOne({ id: stockSymbol, changes: { buyPrice: buyPrice } }, state);
    }),
    on(clearSelectedStockAction, (state) => ({
        ...state,
        selectedStockSymbol: null
    })),
);
