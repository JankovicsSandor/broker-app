import { StockState } from "../stock/stock.state";
import { User } from "../user";

export interface State {
    user: User;
    stock: StockState
}