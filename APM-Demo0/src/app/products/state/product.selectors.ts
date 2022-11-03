import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from ".";
import { newProduct } from "../product";

const getProductsFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector (
    getProductsFeatureState,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector (
    getProductsFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector (
    getProductsFeatureState,
    getCurrentProductId,
    (state, currentProductId) => {
        if (currentProductId === 0) {
            return newProduct;
        } else {
            return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
        }
    }
);

export const getProducts = createSelector (
    getProductsFeatureState,
    state => state.products
);

export const getError = createSelector (
    getProductsFeatureState,
    state => state.error
);