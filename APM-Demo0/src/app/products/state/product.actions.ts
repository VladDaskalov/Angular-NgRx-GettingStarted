import { createAction } from "@ngrx/store";

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code'
}

export const toggleProductCode = createAction (
   ProductActionTypes.ToggleProductCode
);

