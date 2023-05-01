import { createAction, props } from "@ngrx/store";
import { User } from "./user.state";

export const setUser = createAction("[User] Set User", props<{ user: User }>());

export const modifyUserBalance = createAction("[User] Modify user balance", props<{ amount: number }>());

export const clearUser = createAction('[User] Clear User');