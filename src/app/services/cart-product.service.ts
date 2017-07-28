import { Injectable } from '@angular/core';
import { CartProductItem } from './../models/cart-product.model';
import { ProductService } from './../product/services/product.service';
import { CartService,Info } from './../cart/cart.service';
import {Subscription} from 'rxjs/Subscription';

export interface Info {
   total:number;
   totalSum:number;
   updated : Date
}

@Injectable()
export class CartProductService {

    items: Array<CartProductItem> = [];

    info: Info = { total : 0, totalSum :0, updated : new Date() };
    subscription:Subscription;

    constructor(private cartService: CartService,
    private productService: ProductService,) {
         this.subscription = this.cartService.navItem$
       .subscribe(item => { 
           this.updateTotals();})        ;
    }

    getItems(): Array<CartProductItem> {
        let cartitems = this.cartService.getCartItems();
    //let productsproductService
    cartitems.forEach(element => {
      console.log("CartListComponent.ngOnInit, getProduct, id ="+element.productId);
  
      this.productService.getProduct(element.productId).then(
        user => {
      // todo: check maybe -1 if id not found
      if (user) {
         this.items.push(new CartProductItem(element,user));
      } 
      else { // id not found
       
      }
      });
      
    });

    return this.items;
    }

    private countCartSum(){
        this.info.totalSum=0;
        this.items.forEach(
            s => this.info.totalSum += s.cartItem.quantity*s.product.price
        ) ;
    }   

    private countItemsQuantityInCart(){
        this.info.total = 0;
        this.items.forEach(
            s => this.info.total += s.cartItem.quantity
        ) ;
    }

    private updateTotals()
    {
        console.log("CartProductService::updateTotals");
        this.countItemsQuantityInCart();
        this.countCartSum();
        this.info.updated = new Date(); 
    }

}