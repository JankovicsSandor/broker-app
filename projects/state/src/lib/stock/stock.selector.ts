import { createSelector } from "@ngrx/store";
import { StockState } from "./stock.state";
import { AppState } from "../core";

export const selectStockState = (state: AppState) => state.stock;


export const getSelectedStockSymbol = createSelector(
    selectStockState,
    (state: StockState) => state.selectedStockSymbol
);

export const selectAllStocks = createSelector(
    selectStockState,
    (state: StockState) => state.entities
);