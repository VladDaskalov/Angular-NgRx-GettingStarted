import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { State } from '../state/product.models';
import * as ProductActions from '../state/product.actions';
import * as ProductSelectors from '../state/product.selectors';

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
    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ = this.store.select(ProductSelectors.getCurrentProduct);
    this.products$ = this.store.select(ProductSelectors.getProducts);
    this.errorMessage$ = this.store.select(ProductSelectors.getError);
    this.displayCode$ = this.store.select(ProductSelectors.getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
  }
}
