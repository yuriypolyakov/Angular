import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { OrdersComponent } from './orders/orders.component';
import { LocalStorageService } from './storage/local-storage.service';
import { StorageComponent } from './storage/storage.component';
import { AppConstsService } from './app-settings/app-consts.service';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { RandomStringComponent } from './random-string/random-string.component';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StorageComponent,
    AppSettingsComponent,
    RandomStringComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [
    LocalStorageService,
    AppConstsService
    ],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
