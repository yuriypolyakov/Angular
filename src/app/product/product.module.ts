import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent, ProductService } from '.';
import { ProductsRoutingModule, usersRouterComponents } from './products.routing.module';
//import { CartModule } from './../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    //CartModule
  ],
  declarations: [ usersRouterComponents,
    ProductComponent,
  ],
   providers: [
    ProductService
    ],
})
export class ProductModule { }
