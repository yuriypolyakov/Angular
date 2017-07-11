import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  exports: [CartListComponent,CartItemComponent]
})
export class CartModule { } 
