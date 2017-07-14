import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { LocalStorageService } from './local-storage.service';
import { StorageComponent } from './storage/storage.component';
import { AppConstsService } from './app-settings/app-consts.service';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { RandomStringComponent } from './random-string/random-string.component';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrdersComponent,
    StorageComponent,
    AppSettingsComponent,
    RandomStringComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductService,
    LocalStorageService,
    AppConstsService
    ],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
