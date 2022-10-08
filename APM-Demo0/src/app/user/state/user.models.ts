import { User } from "../user";

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

export const initialUserState = {
    maskUserName: false,
    currentUser: null
}