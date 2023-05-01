import { createSelector } from "@ngrx/store";
import { AppState } from "../core";
import { User } from "./user.state"
import { OpenTransaction } from "../transaction";

export const selectUser = (state: AppState) => state.user;
export const selectUserOpenTransactions = (state: AppState) => state.openTransactions;


export const selectUserProps = createSelector(
    selectUser,
    (state: User) => state
)

export const selectUserWallet = createSelector({
    user: selectUser,
    transactions: selectUserOpenTransactions
})