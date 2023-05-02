import { createReducer, on } from "@ngrx/store";
import { OpenTransaction } from "./transaction.state";
import { addNewTransactionFinishedSuccess, updateChangePercentForTransaction } from "./transaction.actions";

export const transactionsInitialState: OpenTransaction[] = []

export const transactionReducer = createReducer(
    transactionsInitialState,
    on(addNewTransactionFinishedSuccess, (state, { result }) => [...state, result]),
    on(updateChangePercentForTransaction, (state, { changePercent, transactionId,sellPrice }) => {
        return state.map((transaction) => {
            if(transaction.transactionId==transactionId){
                return { ...transaction, changePercent: changePercent, sellPrice: sellPrice }
            }else{
                return transaction
            }
           
        })
    }),
)