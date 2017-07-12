import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ViewChild,ElementRef } from '@angular/core';
import { ICartItem } from "app/cart/models/cart.item.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

@Input()  CartItem: ICartItem;
@Output() update: EventEmitter<ICartItem>;
@Output() delete: EventEmitter<number>;

@ViewChild('topelement') topelement: ElementRef;
@HostBinding('class') class = 'task';

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
     console.log(event.target);
  }

@HostListener('click') clicked() {
    console.log('click event on host element');
     (<HTMLDivElement>this.topelement.nativeElement).style.color = 'red';
  }

  @HostListener('mouseenter', ['$event']) enter(event: Event) {
    //console.log('mouseenter event on host element');
  }
  @HostListener('mouseleave',  ['$event']) leave(event: Event) {
  //  console.log('mouseleave event on host element');
  }

  constructor() {
    this.update = new EventEmitter<ICartItem>();
    this.delete = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('On Destroy Hook');
  }

  updateQuantity(updatedItem: {quantity: number}): void {
    console.log('CartItemComponent, updateQuantity method:', this.CartItem, ", event=",updatedItem.quantity);
    this.CartItem.quantity = +updatedItem.quantity ;
    console.log('CartItemComponent, updatedItem =', this.CartItem);
    this.update.emit(this.CartItem);
  }

  deleteItem(): void {
    console.log('CartItemComponent, deleteItem method:', this.CartItem);
      this.delete.emit(this.CartItem.id);
  }
}
