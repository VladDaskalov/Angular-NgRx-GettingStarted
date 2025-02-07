import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { ProductApiActions, ProductPageActions } from ".";
import { ProductService } from "../product.service";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions,
        private productService: ProductService) { }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.loadProducts),
            mergeMap(action => this.productService.getProducts().pipe(
                map(products => ProductApiActions.loadProductsSuccess({ products })),
                catchError(error => of(ProductApiActions.serviceCallFailure({ error })))
            ))
        );
    });

    createProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.createProduct),
            concatMap(action => this.productService.createProduct(action.product).pipe(
                map(product => ProductApiActions.createProductSuccess({ product })),
                catchError(error => of(ProductApiActions.serviceCallFailure({ error })))
            ))
        );
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.updateProduct),
            concatMap(action => this.productService.updateProduct(action.product).pipe(
                map(product => ProductApiActions.updateProductSuccess({ product })),
                catchError(error => of(ProductApiActions.serviceCallFailure({ error })))
            ))
        );
    });

    deleteProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.deleteProduct),
            concatMap(action => this.productService.deleteProduct(action.product.id).pipe(
                map(() => ProductApiActions.deleteProductSuccess()),
                catchError(error => of(ProductApiActions.serviceCallFailure({ error })))
            ))
        );
    });
}