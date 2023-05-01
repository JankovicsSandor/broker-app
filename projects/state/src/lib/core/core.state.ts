import { StockState } from "../stock/stock.state";
import { OpenTransaction } from "../transaction/transaction.state";
import { User } from "../user";

export interface AppState {
    user: User;
    stock: StockState
    openTransactions: OpenTransaction[];
}