import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Order } from './../../models/order.model';

@Component({
  selector: 'order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent {
  @Input()  order: Order;
  @Output() onComplete = new EventEmitter<Order>();

  constructor() { }

  completeTask(event: any): void {
    this.onComplete.emit(this.order);
  }

  editTask() {
    
  }
}
