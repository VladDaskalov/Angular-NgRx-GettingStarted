import { Product } from "../product";
import * as AppState from "../../state/app.state";

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string;
}

export const initialProductState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

export interface State extends AppState.State {
    products: ProductState;
}