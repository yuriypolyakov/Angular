
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './../../models/product.model';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Array<Product>;

  constructor(
    private productService: ProductService,
   
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));
  }

  ngOnDestroy() {
  }
}
