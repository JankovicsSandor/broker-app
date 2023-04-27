import { createSelector } from "@ngrx/store";
import { AppState } from "../core";
import { User } from "./user.state";

export const selectUser = (state: AppState) => state.user;

export const selectUserProps = createSelector(
    selectUser,
    (state:User)=>state
)