import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import './../../services/rxjs-extensions';

import { Product } from './../../models/product.model';

@Injectable()
export class ProductPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(
    private http: Http
  ) {}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
            .toPromise()
            .then( response => <Product[]>response.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  getProduct(id: number): Promise<Product> {
    return this.http.get(`${this.productsUrl}/${id}`)
            .toPromise()
            .then( response => <Product>response.json() )
            .catch( this.handleError );
  }

}
