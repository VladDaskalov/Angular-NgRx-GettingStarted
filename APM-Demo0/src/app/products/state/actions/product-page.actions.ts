import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

enum ProductPageActionTypes {
   ToggleProductCode = '[Product  Page] Toggle Product Code',
   SetCurrentProduct = '[Product  Page] Set Current Product',
   ClearCurrentProduct = '[Product  Page] Clear Current Product',
   InitializeCurrentProduct = '[Product  Page] Initialize Current Product',
   Load = '[Product  Page] Load',
   Create = '[Product Page] Create',
   Update = '[Product Page] Update',
   Delete = '[Product Page] Delete',
}

export const loadProducts = createAction(
   ProductPageActionTypes.Load
);

export const createProduct = createAction(
   ProductPageActionTypes.Create,
   props<{ product: Product }>()
);

export const updateProduct = createAction(
   ProductPageActionTypes.Update,
   props<{ product: Product }>()
);

export const deleteProduct = createAction(
   ProductPageActionTypes.Delete,
   props<{ product: Product }>()
);

export const toggleProductCode = createAction(
   ProductPageActionTypes.ToggleProductCode
);

export const setCurrentProduct = createAction(
   ProductPageActionTypes.SetCurrentProduct,
   props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
   ProductPageActionTypes.ClearCurrentProduct
);

export const initializeCurrentProduct = createAction(
   ProductPageActionTypes.InitializeCurrentProduct
);

