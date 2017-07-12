import { Injectable } from '@angular/core';
import { ICartItem,CartItem } from 'app/cart/models/cart.item.model';

export interface Info {
   total:number;
   totalSum:number;
}

@Injectable()
export class CartService {

    idx : number;
    cartItems : Array<ICartItem> ;

    info: Info = { total : 0, totalSum :0 };

    constructor() {
        this.idx=1;
        
        this.cartItems =[
        new CartItem( this.idx++, 'cart item 1',1,10,false),
        new CartItem(this.idx++, 'cart item 2',2,20,true),
        new CartItem(this.idx++, 'cart item 3',4,30,true)
        ];

        this.updateTotals();
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
            this.updateTotals();
            
        }
    }

    delete(id: number): void {
        console.log('CartService, delete method:', id);
        var found = this.cartItems.find(c => c.id==id);
        if (found!=null)
        {
            console.log('Delete!');
            var index = this.cartItems.indexOf(found);
            this.cartItems.splice(index, 1);    
            this.updateTotals();
        }
    }

    private countCartSum(){
        this.info.totalSum=0;
        this.cartItems.forEach(
            s => this.info.totalSum += s.quantity*s.price
        ) ;
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
    }

}