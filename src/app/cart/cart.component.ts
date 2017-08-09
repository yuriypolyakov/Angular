import { Component, OnInit,AfterContentInit,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private cartService: CartService,
  private router: Router,
    private route: ActivatedRoute
) { 
    this.info = cartService.info;
   
   }

  totalQuantity : number;

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

 update(item: ICartItem): void {
   console.log('CartComponent, update method:', item);
  this.cartService.update(item);
}
}
