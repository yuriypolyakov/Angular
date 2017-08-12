import { Injectable } from '@angular/core';

import { Order,OrderStatus } from './../../models/order.model';

const orderList = [
  //new Order(1,2,new Date(),OrderStatus.created,[])
];

const orderListPromise = Promise.resolve(orderList);

@Injectable()
export class OrdersService {

  idx : number;

  constructor() {
        this.idx=1;
    }

  getOrders(): Promise<Order[]> {
    console.log("OrdersService::getOrders "+orderList.length);
    return orderListPromise;
  }

  getOrder(id: number | string): Promise<Order> {
    return this.getOrders()
      .then(orders => orders.find(order => order.id === +id))
      .catch(() => Promise.reject('Error in getOrder method'));;
  }

  addOrder(cartItems : Array<number>): number {
    orderList.push(
      new Order(this.idx++,2,new Date(),OrderStatus.created,cartItems)
    );
  
    return this.idx;
  }

  updateOrder(task: Order): void {
    let i = -1;

    orderList.forEach((item, index) => {
      if (item.id === task.id ) {
        i = index;
        return false;
      }
    });
    
    if (i > -1) {
      orderList.splice(i, 1, task);
    }
  }

  completeOrder(order): void {
    order.done = true;
  }
}
