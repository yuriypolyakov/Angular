import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Order } from './../../models/order.model';

@Component({
  selector: 'order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent {
  @Input()  order: Order;
 
  constructor() { }

 
}
