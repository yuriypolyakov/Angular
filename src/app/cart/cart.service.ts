import { Injectable } from '@angular/core';
import { ICartItem,CartItem } from './models/cart.item.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { LocalCartService } from './../services/local-cart.service';

export interface Info {
   total:number;
   totalSum:number;
   updated : Date
}

@Injectable()
export class CartService {

    idx : number;
    cartItems : Array<ICartItem> ;

    info: Info = { total : 0, totalSum :0, updated : new Date() };

      // Observable navItem source
    private _navItemSource = new BehaviorSubject<number>(0);
    // Observable navItem stream
    navItem$ = this._navItemSource.asObservable();
    // service command
    changeNav(number) {
        this._navItemSource.next(number);
    }


    constructor(
        private localCartService: LocalCartService) {
        this.idx=1;
        
        this.cartItems =[];
        this.loadFromStorage();
    }

    private loadFromStorage()
    {
          let storedItems =  this.localCartService.getItem("cartItems");

          if (storedItems == null) return;
                console.log("loadFromStorage, "+storedItems);
            this.cartItems = storedItems;
            storedItems.forEach(element => {
            //console.log("loadFromStorage element, id ="+element.id);
            this._navItemSource.next(element.productId);
            });
     }

    private saveItemsToStorage()
    {
         this.localCartService.setItem("cartItems",this.cartItems.filter(s=>s.orderId==null));
    }
  
    getCartItems(): Array<ICartItem> {
        return this.cartItems;
    }

     
    addProduct(productId: number, quantity:number) {
      this.cartItems.push(new CartItem(this.idx++,productId,quantity,false));
        this.saveItemsToStorage();
     
        this._navItemSource.next(productId);
	}

    update(item: ICartItem): void {
        console.log('CartService, update method:', item);
        var found = this.cartItems.find(c => c.id==item.id);
        if (found!=null)
        {
            found.quantity = item.quantity;
            //this.updateTotals();
            this._navItemSource.next(item.id);
        }
    }

    delete(id: number): void {
        console.log('CartService, delete method:', id);
        var found = this.cartItems.find(c => c.id==id);
        if (found!=null)
        {
            console.log('Delete!');
            found.quantity = 0;
            var index = this.cartItems.indexOf(found);
            this.cartItems.splice(index, 1);    
            //this.updateTotals();
            this.saveItemsToStorage();
        }
    }

    public isProductInCart(id:number) : boolean
    {
        var found = this.cartItems.filter(s=> s.orderId==null).find(c => c.productId==id);//
        return found!=null;
    }

    public moveCartItemsToOrder(orderId:number) 
    {
       this.cartItems.forEach(c => c.orderId=orderId);
       this.saveItemsToStorage();
    }

}