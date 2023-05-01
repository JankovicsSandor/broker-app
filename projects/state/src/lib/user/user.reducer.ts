import { createReducer, on } from "@ngrx/store";
import { User } from "./user.state";
import { clearUser, modifyUserBalance, setUser } from "./user.actions";

export const userInitialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
    balance: 120000
};

export const userReducer = createReducer(
    userInitialState,
    on(setUser, (state, { user }) => ({
        ...state,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
    })),
    on(modifyUserBalance, (state, { amount }) => ({
        ...state,
        balance: state.balance + amount
    })),
    on(clearUser, () => userInitialState)
);