import { createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import { clearUser, setUser } from "./user.actions";

export const initialState: UserState = {
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
};

export const userReducer = createReducer(
    initialState,
    on(setUser, (state, { firstName, lastName, email, profilePicture }) => ({
        ...state,
        firstName: firstName,
        lastName: lastName,
        email: email,
        profilePicture: profilePicture,
    })),
    on(clearUser, () => initialState)
);