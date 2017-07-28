import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Router } from '@angular/router';
import { AppRoutingModule,appRouterComponents  } from './app.routing.module';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { OrdersComponent } from './orders/orders.component';
import { LocalStorageService } from './storage/local-storage.service';
import { StorageComponent } from './storage/storage.component';
import { AppConstsService } from './app-settings/app-consts.service';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { RandomStringComponent } from './random-string/random-string.component';
import { ClickDirective } from './directives/click.directive';
import { CartProductService } from './services/cart-product.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StorageComponent,
    AppSettingsComponent,
    RandomStringComponent,
    appRouterComponents,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    AppConstsService,
    CartProductService
    ],
  bootstrap: [AppComponent]
}) 

export class AppModule {
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
