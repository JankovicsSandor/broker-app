import { StockState } from "../stock/stock.state";
import { User } from "../user";

export interface AppState {
    user: User;
    stock: StockState
}