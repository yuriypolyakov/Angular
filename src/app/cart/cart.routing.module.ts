import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent ,CartItemComponent , } from '.';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
     
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

export let cartRouterComponents = [CartComponent, CartListComponent,CartItemComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
