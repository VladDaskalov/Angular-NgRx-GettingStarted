import { createReducer, on } from "@ngrx/store";
import { initialProductState, ProductApiActions, ProductPageActions, ProductState } from ".";

export const productReducer = createReducer<ProductState>(
    initialProductState,
    on(ProductPageActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.currentProductId 
        };
    }),
    on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: null 
        };
    }),
    on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProductId: 0 
        };
    }),
    on(ProductApiActions.loadProductsSuccess, (state,action) => {
        return {
            ...state,
            products: action.products,
            error: ''
        };
    }),
    on(ProductApiActions.createProductSuccess, (state,action) => {
        const updatedProducts = state.products.concat(action.product);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        };
    }),
    on(ProductApiActions.updateProductSuccess, (state,action) => {
        const updatedProducts = state.products.map(
            item => item.id === action.product.id ? action.product : item)
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        };
    }),
    on(ProductApiActions.deleteProductSuccess, (state,action) => {
        const updatedProducts = state.products.filter(
            item => item.id !== state.currentProductId)
        return {
            ...state,
            products: updatedProducts,
            currentProductId: null,
            error: ''
        };
    }),
    on(ProductApiActions.serviceCallFailure, (state,action) => {
        return {
            ...state,
            error: action.error
        };
    })
);