import { createSelector } from "@ngrx/store";
import { StockState } from "./stock.state";
import { State } from "../core";

export const selectStockState = (state: State) => state.stock;


export const getSelectedId = createSelector(
    selectStockState,
    (state: StockState) => state.selectedStockSymbol
);

export const selectAllStocks = createSelector(
    selectStockState,
    (state: StockState) => state.entities
);