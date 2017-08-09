import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent, ProductService } from '.';
import { ProductsRoutingModule, productRouterComponents } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [ productRouterComponents,    ProductComponent,
  ],
   providers: [
    ProductService
    ],
})
export class ProductModule { } 
