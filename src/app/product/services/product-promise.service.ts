import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
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

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`,
        body = JSON.stringify(product),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();
    
    options.headers = headers;

    return this.http.put(url, body, options)
            .toPromise()
            .then( response => <Product>response.json() )
            .catch( this.handleError );
  }

  delete(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;

   return this.http.delete(url)
            .toPromise()
            .then( response => <Product>response.json())
            .catch( this.handleError );
  }

}
