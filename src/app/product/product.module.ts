import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [ProductComponent],
   providers: [
    ProductService
    ],
  exports : [ProductComponent]
})
export class ProductModule { }
