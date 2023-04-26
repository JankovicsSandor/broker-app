import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.state";

export const setUser = createAction("[User] Set User", props<UserState>());

export const clearUser = createAction('[User] Clear User');