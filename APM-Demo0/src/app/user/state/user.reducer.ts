import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    { maskUserNameCheck: false },
    on(createAction('[User] Toggle Mask UserName'), state => {
        return {
            ...state,
            maskUserNameCheck: !state.maskUserNameCheck
        };
    })
);
