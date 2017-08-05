import { Component, OnInit } from '@angular/core';

import { Order } from './../../models/order.model';
import { OrdersService } from './../services/orders.service';

@Component({
  templateUrl: 'order-list.component.html',
  styleUrls: ['order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Array<Order>= [];

  constructor(
    private orderService: OrdersService) { }

  ngOnInit() {
    
    this.orderService.getOrders()
      .then(orders => 
        {
          //console.log("orderService.getOrders() = "+orders);
          this.orders = orders;
          //console.log(this.orders.length);
        }
      )
      .catch((err) => console.log(err));

      
  }

  completeTask(order: Order): void {
    this.orderService.completeOrder(order);
  }
}
