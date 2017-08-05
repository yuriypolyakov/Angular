import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from '.';

const routes: Routes = [
  {
    path: 'order-list',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule] 
})
export class OrdersRoutingModule { }
