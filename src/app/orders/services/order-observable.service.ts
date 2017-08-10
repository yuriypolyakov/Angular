import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import './../../services/rxjs-extensions';

import { Order} from './../../models/order.model';

@Injectable()
export class OrderObservableService {
  private orderssUrl = 'http://localhost:3000/orders';

  constructor(
    private http: Http
  ) {}

  getOrders(): Observable<Order[]> {
    return this.http.get(this.orderssUrl)
            .map( this.handleData )
            .catch( this.handleError );
  }

  getOrder(id: number) {

  }

  updateOrder(user: Order) {

  }

  createOrder(user: Order) {

  }

  deleteOrder(user: Order) {

  }

  private handleData(response: Response) {
    const body = response.json();
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message)
                    ? error.message
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
