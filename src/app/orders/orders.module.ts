import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderObservableService,OrderComponent,OrderListComponent} from '.';
import { OrdersRoutingModule } from './orders.routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [ OrderListComponent, OrderComponent],
  providers: [
    OrderObservableService
  ]

})
export class OrdersModule { }
