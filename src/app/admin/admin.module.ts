import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule,adminRouterComponents } from './admin.routing.module';

import { FormsModule } from '@angular/forms';
import { ProductService } from './../product/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule

  ],
  declarations: [adminRouterComponents],
   providers: [
    ProductService
    ],
})
export class AdminModule { }
 