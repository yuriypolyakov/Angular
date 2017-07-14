import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';
//import { OrdersComponent } from './orders/orders.component';
//import { CartItemComponent } from './cart/cart-item/cart-item.component';
//import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
