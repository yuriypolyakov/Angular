import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductService {

  constructor() { }

  
  getProducts(): Array<Product> {
    return [
      new Product(1, 'Product1'),
      new Product(2, 'Product2'),
      new Product(3, 'Product3')
    ];
  }

}