import { createReducer, on } from "@ngrx/store";
import { newProduct } from "../product";
import * as productActions from "./product.actions";
import { initialProductState, ProductState } from "./product.models";

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
            currentProductId: action.currentProductId 
        };
    }),
    on(productActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: null 
        };
    }),
    on(productActions.initializeCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: 0 
        };
    }),
    on(productActions.loadProductsSuccess, (state,action) => {
        return {
            ...state,
            products: action.products,
            error: ''
        };
    }),
    on(productActions.loadProductsFailure, (state,action) => {
        return {
            ...state,
            products: [],
            error: action.error
        };
    }),
    on(productActions.createProductSuccess, (state,action) => {
        const updatedProducts = state.products.concat(action.product);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        };
    }),
    on(productActions.createProductFailure, (state,action) => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(productActions.updateProductSuccess, (state,action) => {
        const updatedProducts = state.products.map(
            item => item.id === action.product.id ? action.product : item)
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        };
    }),
    on(productActions.updateProductFailure, (state,action) => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(productActions.deleteProductSuccess, (state,action) => {
        const updatedProducts = state.products.filter(
            item => item.id !== state.currentProductId)
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        };
    }),
    on(productActions.deleteProductFailure, (state,action) => {
        return {
            ...state,
            error: action.error
        };
    })
);