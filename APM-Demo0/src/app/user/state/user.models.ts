import { User } from "../user";

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

export const initialUserState: UserState = {
    maskUserName: false,
    currentUser: null
}