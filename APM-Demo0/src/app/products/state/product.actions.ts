import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
   ToggleProductCode = '[Product] Toggle Product Code',
   SetCurrentProduct = '[Product] Set Current Product',
   ClearCurrentProduct = '[Product] Clear Current Product',
   InitializeCurrentProduct = '[Product] Initialize Current Product',
   Load = '[Product] Load',
   LoadSuccess = '[Product] Load Success',
   LoadFailure = '[Product] Load Failure',
   Create = '[Product] Create',
   CreateSuccess = '[Product] Create Success',
   CreateFailure = '[Product] Create Failure',
   Update = '[Product] Update',
   UpdateSuccess = '[Product] Update Success',
   UpdateFailure = '[Product] Update Failure',
   Delete = '[Product] Delete',
   DeleteSuccess = '[Product] Delete Success',
   DeleteFailure = '[Product] Delete Failure'
}

export const loadProducts = createAction(
   ProductActionTypes.Load
);

export const loadProductsSuccess = createAction(
   ProductActionTypes.LoadSuccess,
   props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
   ProductActionTypes.LoadFailure,
   props<{ error: string }>()
);

export const createProduct = createAction(
   ProductActionTypes.Create,
   props<{ product: Product }>()
);

export const createProductSuccess = createAction(
   ProductActionTypes.CreateSuccess,
   props<{ product: Product }>()
);

export const createProductFailure = createAction(
   ProductActionTypes.CreateFailure,
   props<{ error: string }>()
);

export const updateProduct = createAction(
   ProductActionTypes.Update,
   props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
   ProductActionTypes.UpdateSuccess,
   props<{ product: Product }>()
);

export const updateProductFailure = createAction(
   ProductActionTypes.UpdateFailure,
   props<{ error: string }>()
);

export const deleteProduct = createAction(
   ProductActionTypes.Delete,
   props<{ product: Product }>()
);

export const deleteProductSuccess = createAction(
   ProductActionTypes.DeleteSuccess
);

export const deleteProductFailure = createAction(
   ProductActionTypes.DeleteFailure,
   props<{ error: string }>()
);

export const toggleProductCode = createAction(
   ProductActionTypes.ToggleProductCode
);

export const setCurrentProduct = createAction(
   ProductActionTypes.SetCurrentProduct,
   props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
   ProductActionTypes.ClearCurrentProduct
);

export const initializeCurrentProduct = createAction(
   ProductActionTypes.InitializeCurrentProduct
);

