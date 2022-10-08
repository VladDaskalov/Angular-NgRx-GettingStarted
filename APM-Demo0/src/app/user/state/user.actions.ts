import { createAction } from "@ngrx/store";

export enum UserActionTypes {
    ToggleMaskUserName = '[User] Toggle Mask UserName'
}

export const toggleMaskUserName = createAction (
    UserActionTypes.ToggleMaskUserName
);