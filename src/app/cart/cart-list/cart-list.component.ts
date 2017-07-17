import { Component, OnInit,EventEmitter, Input, Output, ViewChild,ElementRef } from '@angular/core';
import { CartItem,ICartItem } from '../models/cart.item.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService,Info } from '../cart.service';
import { ClearancePipe } from './../pipes/clearance.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [ClearancePipe]
})
export class CartListComponent implements OnInit {

  @ViewChild('label') labelField: ElementRef;
  @ViewChild(CartItemComponent) child: CartItemComponent;
  @ViewChild('child') childComp: ElementRef;


  ngAfterViewInit() {
    (<HTMLLabelElement>this.labelField.nativeElement).textContent = 'loaded';
    //this.child.onClick();

    console.log(this.childComp);
  }

  items: Array<ICartItem>;
  clearanceList : Array<ICartItem>;
  info: Info;

  @Output() update: EventEmitter<ICartItem>;

   constructor(private cartService: CartService,
  private clearancePipe: ClearancePipe) { 
    this.info = cartService.info;
    console.log('CartListComponent, constructor, this.info.total='+this.info.total);
   }

   getClearanceList() {
      this.clearanceList = this.clearancePipe.transform(this.items);
      console.log("clearnceList.count="+this.clearanceList.length);
  }
  ngOnInit() {
    this.items = this.cartService.getCartItems();
    this.getClearanceList();
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
    
    this.cartService.delete(id);
    
  }
}
