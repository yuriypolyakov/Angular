import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent ,CartItemComponent , /*UserFormComponent*/ } from '.';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      /*{
        path: 'add',
        component: UserFormComponent
      },
      {
        path: 'edit/:id',
        component: UserFormComponent,
      },*/
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

export let cartRouterComponents = [CartComponent, CartListComponent,CartItemComponent/*, UserFormComponent*/];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
