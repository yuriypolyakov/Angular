import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent,ProductsComponent,ProductListComponent,ProductFormComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    
  },
  {
    path: 'products/:mode',
    component: ProductListComponent,
    
  },
  {
    path: 'add',
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent,
    //canDeactivate: [CanDeactivateGuard],
    //resolve: {          user: ProductResolveGuard        }
  },
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
