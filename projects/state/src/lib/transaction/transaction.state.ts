export interface NewTransaction {
    symbol: string;
    buyPrice: number;
    sellPrice: number;
    direction: "BUY" | "SELL";
    amount: number;
    transactionDate: Date;
}

export interface OpenTransaction extends NewTransaction {
    transactionId: string;
    currentValue: number;
    changePercent: number;
}

export interface TransactionBuyPercentUpdate{
    transactionId:string;
    changePercent:number;
    sellPrice:number;
}
