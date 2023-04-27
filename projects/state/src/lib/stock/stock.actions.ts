import { createAction, props } from "@ngrx/store";
import { Stock } from "./stock.state";

//Insert
export const insertStockAction = createAction("[Stock] Insert Stock", props<Stock>());

//Update
export const setSelectedStockAction = createAction("[Stock] Set Selected Stock", props<{ stockSymbol: string }>());
export const updateStockSellPriceAction = createAction("[Stock] Set Stock Sell Price", props<{ stockSymbol: string, sellPrice: number }>());
export const updateStockBuyPriceAction = createAction("[Stock] Set Stock Buy Price", props<{ stockSymbol: string, buyPrice: number }>());

//Delete

//Clear
export const clearSelectedStockAction = createAction("[Stock] Clear Selected Stock");