import { Injectable } from '@angular/core';

import { Product } from './../../models/product.model';

const productList = [
      new Product( 1, 'Product1',4,100),
      new Product(2, 'Product2',6,500),
      new Product(3, 'Product3',7,800),
      new Product(4, 'Product4',7,800)
    ];

const productListPromise = Promise.resolve(productList);
   
@Injectable()
export class ProductService {

  products : Array<Product> ;

  constructor() {
 
   }

  getProducts(): Promise<Product[]> {
    return productListPromise;
  }

getProduct(id: number | string): Promise<Product> {
    //console.log("getProduct");
    return this.getProducts()
      .then(prod => 
        { //console.log("getProduct, id="+id);
          return prod.find(product => product.id === +id);}
      )
      .catch(() => Promise.reject('Error in getProduct method, id='+id));
  }

  addProduct(user: Product): void {
    this.products.push(user);
  }

  updateProduct(user: Product): void {
    let i = -1;

    this.products.forEach((item, index) => {
      if (item.id === user.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      this.products.splice(i, 1, user);
    }
  }
}