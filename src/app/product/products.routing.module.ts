import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent,ProductsComponent,ProductListComponent,ProductFormComponent } from '.';

const routes: Routes = [
  {
    path: 'products/:mode',
    component: ProductsComponent,
    children: [
      {
        path: 'add',
        component: ProductFormComponent
      },
      {
        path: 'edit/:id',
        component: ProductFormComponent,
        //canDeactivate: [CanDeactivateGuard],
        //resolve: {          user: UserResolveGuard        }

      },
      {
        path: '',
        component: ProductListComponent,
        
      },
    ]
  }
];

export let usersRouterComponents = [ProductComponent, ProductsComponent, ProductListComponent, ProductFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  //providers: [    UserResolveGuard]

})
export class ProductsRoutingModule { }
