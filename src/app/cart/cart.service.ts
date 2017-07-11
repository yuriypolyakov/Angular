import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ICartItem,CartItem } from 'app/cart/models/cart.item.model';

export interface Info {
   total:number;
}

@Injectable()
export class CartService {

  idx : number;
  cartItems : Array<ICartItem> ;
  nameChange: Subject<string> = new Subject<string>();

    info: Info = { total : 5 };;

  constructor() {
    this.idx=1;
    
    this.cartItems =[
      new CartItem( this.idx++, 'cart item 1',1),
      new CartItem(this.idx++, 'cart item 2',2),
      new CartItem(this.idx++, 'cart item 3',4)
    ];

    this.info = {total : this.countItemsQuantityInCart()};
   }

  
  getCartItems(): Array<ICartItem> {
    return this.cartItems;
  }

create(name: string,quantity:number) {
	  this.cartItems.push(new CartItem(this.idx++,name,quantity));
	}

    update(item: ICartItem): void {
   console.log('CartService, update method:', item);
  var found = this.cartItems.find(c => c.id==item.id);
  if (found!=null)
  {
    found.quantity = item.quantity;
    //this.nameChange.next(found.name);
    this.info.total = this.countItemsQuantityInCart();
  }
}

 countCartSum() : number{
      var sum:number=0;
    this.cartItems.forEach(function(item) {
        //console.log('item.quantity='+item.quantity);
      sum+=item.quantity*item.price;
  
     }) ;
  return sum;
 }   

 countItemsQuantityInCart() : number{

    this.info.total = 0;
    this.cartItems.forEach(
        s => this.info.total += s.quantity
     ) ;
  return this.info.total;
}
}