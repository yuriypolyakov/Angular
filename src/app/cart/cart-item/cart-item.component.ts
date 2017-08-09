import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ViewChild,ElementRef } from '@angular/core';
import { ICartItem } from "../models/cart.item.model";

import { CartProductItem } from '../../models/cart-product.model';
import { ProductAddedService } from './../../services/product-added.service';
import { ConfirmDialogService }  from './../../services/confirm-dialog.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

@Input()  CartItem: CartProductItem;
@Output() update: EventEmitter<ICartItem>;
@Output() delete: EventEmitter<ICartItem>;

  constructor(private productAddedService: ProductAddedService,
    private confirmDialogService: ConfirmDialogService,
  ) {
    this.update = new EventEmitter<ICartItem>();
    this.delete = new EventEmitter<ICartItem>();
  }

  ngOnInit() {
  }


  updateQuantity(updatedItem: {quantity: number}): void {
    console.log('CartItemComponent, updateQuantity method:', this.CartItem, ", event=",updatedItem.quantity);
    let newQuantity = this.CartItem.product.quantity+this.CartItem.cartItem.quantity-updatedItem.quantity ;
    if (newQuantity<0)
    {
      let possibleAmount = +this.CartItem.product.quantity+this.CartItem.cartItem.quantity;
      return this.productAddedService.inform('product quantity is not available, please select not more then '+possibleAmount);
    }
    this.CartItem.product.quantity = newQuantity;
    this.CartItem.cartItem.quantity = +updatedItem.quantity ;
    
    console.log('CartItemComponent, updatedItem =', this.CartItem);
    this.update.emit(this.CartItem.cartItem);
  }

  deleteItem(): void {
    console.log('CartItemComponent, deleteItem method:', this.CartItem);
    this.confirmDialogService.confirm('delete cart item?').then
    (choise => {
     
      if (choise) {
       this.delete.emit(this.CartItem.cartItem);
      } 
      else { 
       
      }
    });
      
  }
} 
