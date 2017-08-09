import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent, ProductService,ProductPromiseService } from '.';
import { ProductsRoutingModule, productRouterComponents } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
        //CartModule
  ],
  declarations: [ productRouterComponents,    ProductComponent, 
  ],
   providers: [
    ProductService,
    ProductPromiseService
    ],
})
export class ProductModule { } 
