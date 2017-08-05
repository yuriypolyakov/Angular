import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent,ProductFormComponent,ManageProductComponent } from '.';
//import { ProductListComponent } from './../product/product-list/product-list.component';
//import { ProductFormComponent } from './../product/product-form/product-form.component';
import { ProductResolveGuard }   from './../guards/product-resolve.guard';
import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
           {
            path: 'products/add',
            component: ProductFormComponent,
           
             },
          { path: 'products/:mode', component: ManageProductsComponent },

          {
            path: 'products/edit/:id',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
          },
        

          },
         { path: '', component: AdminDashboardComponent },
        ]
      } 
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageProductsComponent, ProductFormComponent,ManageProductComponent/*ProductListComponent,ProductFormComponent*/];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    ProductResolveGuard
]

})
export class AdminRoutingModule { }
