import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent,CartService } from '.';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';
@NgModule({
  declarations: [
    CartComponent,
    cartRouterComponents
  ],
  imports: [
    FormsModule,
    CommonModule,
    CartRoutingModule
  ],
  providers: [CartService],
  //exports: [CartListComponent,CartItemComponent]
})
export class CartModule { } 
