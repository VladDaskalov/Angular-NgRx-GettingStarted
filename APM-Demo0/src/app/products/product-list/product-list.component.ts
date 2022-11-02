import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { State } from '../state/product.models';
import * as ProductActions from '../state/product.actions';
import * as ProductSelectors from '../state/product.selectors';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  errorMessage$: Observable<string>;

  constructor(private productService: ProductService,
    private store: Store<State>) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(ProductSelectors.getCurrentProduct);

    this.products$ = this.store.select(ProductSelectors.getProducts);
    this.store.dispatch(ProductActions.loadProducts());

    this.errorMessage$ = this.store.select(ProductSelectors.getError);

    this.displayCode$ = this.store.select(ProductSelectors.getShowProductCode);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
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
