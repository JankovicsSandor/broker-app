import { createReducer, on } from "@ngrx/store";
import { User } from "./user.state";
import { clearUser, setUser } from "./user.actions";

export const userInitialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
};

export const userReducer = createReducer(
    userInitialState,
    on(setUser, (state, { firstName, lastName, email, profilePicture }) => ({
        ...state,
        firstName: firstName,
        lastName: lastName,
        email: email,
        profilePicture: profilePicture,
    })),
    on(clearUser, () => userInitialState)
);