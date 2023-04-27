import { createReducer, on } from "@ngrx/store";
import { User } from "./user.state";
import { clearUser, setUser } from "./user.actions";

export const initialState: User = {
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