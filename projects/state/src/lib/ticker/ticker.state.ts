export interface TickerState {
    ticker: Ticker | null
    isLoading: boolean
}


export interface Ticker {
    symbol: string;
    companyName: string;
    buyPrice: number;
    sellPrice: number;
    preMarketPrice: number;
    previousClosePrice: number;
    openPrice: number;
    dayMin: number;
    dayMax: number;
    yearMin: number;
    yearMax: number;
    marketCap: string;
    forwardDividend: number;
    exDividendDate: Date
}