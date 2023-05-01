import { createReducer, on } from "@ngrx/store";
import { OpenTransaction } from "./transaction.state";
import { addNewTransactionFinishedSuccess } from "./transaction.actions";

export const transactionsInitialState: OpenTransaction[] = []

export const transactionReducer = createReducer(
    transactionsInitialState,
    on(addNewTransactionFinishedSuccess, (state, { result }) => [...state, result])
)