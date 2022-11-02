/* Defines the product entity */
export interface Product {
    id: number | null;
    productName: string;
    productCode: string;
    description: string;
    starRating: number;
}

export const newProduct: Product = {
    id: 0,
    productName: '',
    productCode: 'New',
    description: '',
    starRating: 0
};
