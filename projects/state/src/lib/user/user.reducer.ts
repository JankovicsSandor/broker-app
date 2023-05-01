import { createReducer, on } from "@ngrx/store";
import { User } from "./user.state";
import { clearUser, setUser } from "./user.actions";

export const userInitialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
    balance: 0
};

export const userReducer = createReducer(
    userInitialState,
    on(setUser, (state, { user }) => ({
        ...state,
        user
    })),
    on(clearUser, () => userInitialState)
);