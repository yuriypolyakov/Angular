import { Injectable } from '@angular/core';
import { ICartItem,CartItem } from './models/cart.item.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

    constructor() {
        this.idx=1;
        
        this.cartItems =[];
        /*new CartItem( this.idx++, 1,1,false),
        new CartItem(this.idx++,2,2,true),
        new CartItem(this.idx++,3,4,true)
        ];*/

        this.updateTotals();
    }

    // Observable navItem source
  private _navItemSource = new BehaviorSubject<number>(0);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(number) {
    this._navItemSource.next(number);
  }

    getCartItems(): Array<ICartItem> {
        return this.cartItems;
    }

    create(name: string,quantity:number) {
	  //this.cartItems.push(new CartItem(this.idx++,name,quantity));
    }
    
    addProduct(productId: number, quantity:number) {
      this.cartItems.push(new CartItem(this.idx++,productId,quantity,false));
        this._navItemSource.next(productId);
	}

    update(item: ICartItem): void {
        console.log('CartService, update method:', item);
        var found = this.cartItems.find(c => c.id==item.id);
        if (found!=null)
        {
            found.quantity = item.quantity;
            this.updateTotals();
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
        }
    }

    private countCartSum(){
        this.info.totalSum=0;
       /* this.cartItems.forEach(
            s => this.info.totalSum += s.quantity*s.price
        ) ;*/
    }   

    private countItemsQuantityInCart(){
        this.info.total = 0;
        this.cartItems.forEach(
            s => this.info.total += s.quantity
        ) ;
    }

    private updateTotals()
    {
        this.countItemsQuantityInCart();
        this.countCartSum();
        this.info.updated = new Date();
    }

    public isProductInCart(id:number) : boolean
    {
        var found = this.cartItems.find(c => c.productId==id);
        return found!=null;
    }

    public moveCartItemsToOrder(orderId:number) 
    {
       this.cartItems.forEach(c => c.orderId=orderId);
    }

}