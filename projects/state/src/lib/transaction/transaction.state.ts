export interface NewTransaction{
    symbol:string;
    actionPrice:number;
    direction:"BUY"|"SELL";
    amount:number;
    transactionDate:Date;
}

export interface OpenTransaction extends NewTransaction{
    transactionId:string;
}
