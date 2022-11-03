import { createReducer, on } from "@ngrx/store";
import { initialUserState, UserActions, UserState } from ".";

export const userReducer = createReducer(
    initialUserState,
    on(UserActions.toggleMaskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);
