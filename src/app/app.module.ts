import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
