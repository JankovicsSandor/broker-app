import { createSelector } from "@ngrx/store";
import { State } from "../core";
import { User } from "./user.state";

export const selectUser = (state: State) => state.user;

export const selectUserProps = createSelector(
    selectUser,
    (state:User)=>state
)