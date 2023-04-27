import { createAction, props } from "@ngrx/store";
import { User } from "./user.state";

export const setUser = createAction("[User] Set User", props<User>());

export const clearUser = createAction('[User] Clear User');