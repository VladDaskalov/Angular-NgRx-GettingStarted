import { createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import * as productActions from "./product.actions";
import { initialProductState, ProductState } from "./product.models";

const newProduct: Product = {
    id: 0,
    productName: '',
    productCode: 'New',
    description: '',
    starRating: 0
};

export const productReducer = createReducer<ProductState>(
    initialProductState,
    on(productActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(productActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product 
        };
    }),
    on(productActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: null 
        };
    }),
    on(productActions.initializeCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: newProduct 
        };
    }),
    on(productActions.loadProductsSuccess, (state,action) => {
        return {
            ...state,
            products: action.products
        };
    })
);