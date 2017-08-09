import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AppRoutingModule,appRouterComponents  } from './app.routing.module';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ClickDirective } from './directives/click.directive';
import { CartProductService } from './services/cart-product.service';
import { ProductAddedService } from './services/product-added.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { OrdersModule } from './orders/orders.module';
import { LocalCartService } from './services/local-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents,
    ClickDirective,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    OrdersModule,
    HttpModule,
    JsonpModule,

   // AdminModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CartProductService,
    ProductAddedService,
    ConfirmDialogService,
    AuthGuard,
    AuthService,
    LocalCartService

    ],
  bootstrap: [AppComponent]
}) 

export class AppModule {
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
