import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductPageActions, ProductSelectors, State } from '../state';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());

    this.selectedProduct$ = this.store.select(ProductSelectors.getCurrentProduct);
    this.products$ = this.store.select(ProductSelectors.getProducts);
    this.errorMessage$ = this.store.select(ProductSelectors.getError);
    this.displayCode$ = this.store.select(ProductSelectors.getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: product.id }));
  }

  clearCurrentProduct(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }

  createProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.createProduct({ product }));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.updateProduct({ product }));
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.deleteProduct({ product }));
  }

}
