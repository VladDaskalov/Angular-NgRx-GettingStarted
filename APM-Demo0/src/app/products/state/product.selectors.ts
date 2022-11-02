import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.models";

const getProductsFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector (
    getProductsFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector (
    getProductsFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector (
    getProductsFeatureState,
    state => state.products
);

export const getError = createSelector (
    getProductsFeatureState,
    state => state.error
);