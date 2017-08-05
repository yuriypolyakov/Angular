import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent,OrderListComponent,OrdersService} from '.';
import { OrdersRoutingModule } from './orders.routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [ OrderListComponent, OrderComponent],
  providers: [
    OrdersService
  ]

})
export class OrdersModule { }
