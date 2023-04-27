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


export function selectStockTicker(a: Stock): string {
    return a.symbol;
}

export function sortByName(a: Stock, b: Stock): number {
    return a.companyName.localeCompare(b.companyName);
}

export const adapter: EntityAdapter<Stock> = createEntityAdapter<Stock>({
    selectId: selectStockTicker,
    sortComparer: sortByName,
});