import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import './../../services/rxjs-extensions';

import { Order,OrderItem,OrderStatus} from './../../models/order.model';

@Injectable()
export class OrderObservableService {
  private ordersUrl = 'http://localhost:3000/orders';

   idx : number;

  constructor(
    private http: Http
  ) {}

  getOrders(): Observable<Order[]> {
    return this.http.get(this.ordersUrl)
            .map( this.handleData )
            .catch( this.handleError );
  }

  getOrder(id: number): Observable<Order> {
     return this.http.get(`${this.ordersUrl}/${id}`)
            .map( this.handleData )
            .catch(this.handleError);
  }

  updateOrder(order: Order): Observable<Order> {
     const url = `${this.ordersUrl}/${order.id}`,
        body = JSON.stringify(order),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();

    options.headers = headers;

    return this.http.put(url, body, options)
            .map( this.handleData )
            .catch(this.handleError);

  }

  createOrder(order: Order): Observable<Order> {
    const url = this.ordersUrl,
        body = JSON.stringify(order),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();
    
    options.headers = headers;

    return this.http.post(url, body, options)
            .map( this.handleData )
            .catch( this.handleError );

  }

  deleteOrder(order: Order ): Observable<Order> {
    const url = `${this.ordersUrl}/${order.id}`;

    return this.http.delete(url)
      .map( this.handleData )
      .catch(this.handleError);
  }



  private uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}  

   addOrder(cartItems : Array<OrderItem>): number {
     let guidKey = this.uuidv4();
     let newOrder = new Order(guidKey,2,new Date(),OrderStatus.created,cartItems);
     this.createOrder(newOrder).subscribe(
             () => {return guidKey},
             err => console.log(err)
       );
    /*orderList.push(
      new Order(this.idx++,2,new Date(),OrderStatus.created,cartItems)
    );*/
  
    return 0;
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
