import { createAction, createReducer, on } from "@ngrx/store";
import { initialUserState, UserState } from "./user.models";
import * as userActions from './user.actions'

export const userReducer = createReducer(
    initialUserState,
    on(userActions.toggleMaskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);
