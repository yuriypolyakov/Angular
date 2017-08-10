import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule,Router } from '@angular/router';

import { AppRoutingModule,appRouterComponents  } from './app.routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { CartModule } from './cart/cart.module';
import { ClickDirective } from './directives/click.directive';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product/product.module';
import { ProductAddedService,ConfirmDialogService,AuthService,LocalCartService,CartProductService} from './services/';


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
