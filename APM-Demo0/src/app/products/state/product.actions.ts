import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFailure = '[Product] Load Failure'
}

export const loadProducts = createAction (
   ProductActionTypes.Load
);

export const loadProductsSuccess = createAction (
   ProductActionTypes.LoadSuccess,
   props<{ products: Product[]}>()
);

export const loadProductsFailure = createAction (
   ProductActionTypes.LoadFailure,
   props<{ error: string}>()
);

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

