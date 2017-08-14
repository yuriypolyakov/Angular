
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './../../models/product.model';
import { ProductPromiseService  } from './../';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Array<Product>;

  constructor(
    //private productService: ProductService,
    private productPromiseService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.productPromiseService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));
  }

  ngOnDestroy() {
  }
}
