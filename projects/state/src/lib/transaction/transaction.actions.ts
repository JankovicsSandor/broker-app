import { createAction, props } from "@ngrx/store";
import { NewTransaction, OpenTransaction } from "./transaction.state";

export const addNewTransactionInitiated = createAction("[Transaction] Add New Transaction start", props<{ transaction: NewTransaction }>());
export const addNewTransactionFinishedSuccess = createAction("[Transaction] Add New Transaction finished successfull", props<{ result: OpenTransaction }>());
export const updateChangePercentForTransaction = createAction("[Transaction] Update change percent for transaction", props<{ transactionId: string, changePercent: number, sellPrice: number }>());