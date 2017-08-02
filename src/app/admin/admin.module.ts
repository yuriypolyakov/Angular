import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, AdminDashboardComponent, ManageProductsComponent, } from '.';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule

  ],
  declarations: [AdminDashboardComponent, ManageProductsComponent, AdminComponent]
})
export class AdminModule { }
