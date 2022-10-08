import { Product } from "../product";
import * as AppState from "../../state/app.state";

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export const initialProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
}

export interface State extends AppState.State {
    products: ProductState;
}