import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

export interface StockState extends EntityState<Stock> {
    selectedStockSymbol: string | null;
}

export interface Stock {
    symbol: string;
    buyPrice: number;
    sellPrice: number;
    companyName: string;
}


export function selecStockTicker(a: Stock): string {
    //In this case this would be optional since primary key is id
    return a.symbol;
}

export function sortByName(a: Stock, b: Stock): number {
    return a.companyName.localeCompare(b.companyName);
}

export const adapter: EntityAdapter<Stock> = createEntityAdapter<Stock>({
    selectId: selecStockTicker,
    sortComparer: sortByName,
});