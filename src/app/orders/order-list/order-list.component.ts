import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Order } from './../../models/order.model';
import { OrdersService,OrderObservableService } from './../';

@Component({
  templateUrl: 'order-list.component.html',
  styleUrls: ['order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Array<Order>= [];
  errorMessage: string;
  private sub: Subscription[] = [];


  constructor(
    private orderService: OrdersService
    ,    private orderObservableService: OrderObservableService
  ) { }

  ngOnInit() {
    
    /*this.orderService.getOrders()
      .then(orders => 
        {
          //console.log("orderService.getOrders() = "+orders);
          this.orders = orders;
          //console.log(this.orders.length);
        }
      )
      .catch((err) => console.log(err));

      */
          const sub = this.orderObservableService.getOrders()
      .subscribe(
        users => this.orders = users,
        error => this.errorMessage = <any>error
      );
    this.sub.push(sub);

  }

  completeTask(order: Order): void {
    this.orderService.completeOrder(order);
  }
}
