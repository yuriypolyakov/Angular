import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { CartItem,ICartItem } from 'app/cart/models/cart.item.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService,Info } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
 //@Input() items: Array<ICartItem>;
   items: Array<ICartItem>;
  info: Info;

 @Output() update: EventEmitter<ICartItem>;
   constructor(private cartService: CartService) { 
    this.info = cartService.info;
    console.log('CartListComponent, constructor, this.info.total='+this.info.total);
    /*this._subscription = cartService.nameChange.subscribe((value) => { 
      this.name = value; 
    });*/
   }

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }
 
  ngOnDestroy(): void {
    console.log('On Destroy Hook');
  }

 onUpdateItem(item: ICartItem): void {
    console.log('CartListComponent::onUpdateItem, item', item);
    this.cartService.update(item);
}

onDeleteItem(id: number): void {
    console.log('CartListComponent::onDeleteItem, item', id);
    //this.update.emit(item);
     var found = this.items.find(c => c.id==id);
  if (found!=null)
  {
    console.log('Delete!');
    var index = this.items.indexOf(found);
      this.items.splice(index, 1);    
  }
  }
}
