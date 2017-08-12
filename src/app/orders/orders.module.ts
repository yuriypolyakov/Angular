import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersService,OrderObservableService,OrderComponent,OrderListComponent} from '.';
import { OrdersRoutingModule } from './orders.routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [ OrderListComponent, OrderComponent],
  providers: [
    OrdersService,
    OrderObservableService
  ]

})
export class OrdersModule { }
