import { Injectable } from '@angular/core';

import { Product } from './models/product.model';

@Injectable()
export class ProductService {

  idx : number;
  products : Array<Product> ;

  constructor() {
    this.idx=1;
    
    this.products =[
      new Product( this.idx++, 'Product1'),
      new Product(this.idx++, 'Product2'),
      new Product(this.idx++, 'Product3')
    ];
   }

  
  getProducts(): Array<Product> {
    return this.products;
  }

create(name: string) {
	  this.products.push(new Product(this.idx++,name));
	}
}