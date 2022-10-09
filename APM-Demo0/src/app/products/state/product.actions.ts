import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
}

export const toggleProductCode = createAction (
   ProductActionTypes.ToggleProductCode
);

export const setCurrentProduct = createAction (
   ProductActionTypes.SetCurrentProduct,
   props<{ product: Product}>()
);

export const clearCurrentProduct = createAction (
   ProductActionTypes.ClearCurrentProduct
);

export const initializeCurrentProduct = createAction (
   ProductActionTypes.InitializeCurrentProduct
);

