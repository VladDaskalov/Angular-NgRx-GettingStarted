import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

enum ProductApiActionTypes {
    LoadSuccess = '[Product API] Load Success',
    CreateSuccess = '[Product API] Create Success',
    UpdateSuccess = '[Product API] Update Success',
    DeleteSuccess = '[Product API] Delete Success',
    ServiceCallFailure = '[Product API] Service Call Failure'
 }
 
export const loadProductsSuccess = createAction(
    ProductApiActionTypes.LoadSuccess,
    props<{ products: Product[] }>()
 );
 
 export const createProductSuccess = createAction(
    ProductApiActionTypes.CreateSuccess,
    props<{ product: Product }>()
 );
 
 export const updateProductSuccess = createAction(
    ProductApiActionTypes.UpdateSuccess,
    props<{ product: Product }>()
 );
 
 export const deleteProductSuccess = createAction(
    ProductApiActionTypes.DeleteSuccess
 );
 
 export const serviceCallFailure = createAction(
    ProductApiActionTypes.ServiceCallFailure,
    props<{ error: string }>()
 );
  