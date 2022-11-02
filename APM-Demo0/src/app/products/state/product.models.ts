import { Product } from "../product";
import * as AppState from "../../state/app.state";

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
    error: string;
}

export const initialProductState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: [],
    error: ''
}

export interface State extends AppState.State {
    products: ProductState;
}