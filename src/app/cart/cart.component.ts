import { Component, OnInit,AfterContentInit,OnChanges } from '@angular/core';
import { CartListComponent } from './cart-list/cart-list.component';
import { ICartItem, CartItem } from './models/cart.item.model';
import { CartService,Info } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<ICartItem>;
  info: Info;
  constructor(private cartService: CartService) { 
    this.info = cartService.info;
     console.log('CartComponent, constructor, this.info.total='+this.info.total);
    /*this._subscription = cartService.nameChange.subscribe((value) => { 
      this.name = value; 
    });*/
   }

    ngOnDestroy() {
   //prevent memory leak when component destroyed
    //this._subscription.unsubscribe();
  }

  totalQuantity : number;

  ngOnInit() {
    this.items = this.cartService.getCartItems();
    //this.totalQuantity = this.cartService.countItemsQuantityInCart();
  }

  ngOnChanges()
  {
    console.log('CartComponent, ngOnChanges');
    //this.totalQuantity = this.cartService.countItemsQuantityInCart();
  }
  
 update(item: ICartItem): void {
   console.log('CartComponent, update method:', item);
  this.cartService.update(item);
}
}
