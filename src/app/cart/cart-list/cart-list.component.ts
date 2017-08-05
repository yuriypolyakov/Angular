import { Component, OnInit,EventEmitter, Input, Output, ViewChild,ElementRef } from '@angular/core';
import { CartItem,ICartItem } from '../models/cart.item.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService, Info } from '../cart.service';
import { ClearancePipe } from './../pipes/clearance.pipe';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CartProductItem } from '../../models/cart-product.model';
import { CartProductService } from './../../services/cart-product.service';

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

    if (this.info.total>0)
      {
        (<HTMLLabelElement>this.labelField.nativeElement).textContent = 'loaded';
      }
    //this.child.onClick();

    console.log(this.childComp);
  }

  items: Array<CartProductItem> = [];
  clearanceList : Array<ICartItem>;
  info: Info;

  @Output() update: EventEmitter<ICartItem>;

   constructor(private cartService: CartService,
    private productService: CartProductService,
  private clearancePipe: ClearancePipe,
private route: ActivatedRoute) { 
    this.info = productService.info;
    console.log('CartListComponent, constructor, this.info.total='+this.info.total);
   }

   getClearanceList() {
      this.clearanceList = [];//this.clearancePipe.transform(this.items);
      console.log("clearnceList.count="+this.clearanceList.length);
  }
  ngOnInit() {
    this.items = this.productService.getItems();
   
    this.getClearanceList();
  }
 
  ngOnDestroy(): void {
    console.log('On Destroy Hook');
  }

 onUpdateItem(item: ICartItem): void {
    console.log('CartListComponent::onUpdateItem, item', item);
    this.cartService.update(item);
}

onDeleteItem(item: ICartItem): void {
    console.log('CartListComponent::onDeleteItem, item', item);
    
    this.productService.removeCartItem(item.id);
   
  }

  order(): void {
    //console.log('CartListComponent::order');
    this.productService.makeOrder();
  }
}
