export interface StockState {
    selectedStockSymbol: string | null;
    stocks: Stock[];
}

export interface Stock {
    symbol: string;
    buyPrice: number;
    sellPrice: number;
    companyName: string;
}