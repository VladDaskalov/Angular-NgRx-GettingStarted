import { createReducer, on } from "@ngrx/store";
import * as productActions from "./product.actions";
import { initialProductState, ProductState } from "./product.models";

export const productReducer = createReducer<ProductState>(
    initialProductState,
    on(productActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
)