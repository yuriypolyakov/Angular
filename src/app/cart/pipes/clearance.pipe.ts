import { Pipe, PipeTransform } from '@angular/core';
import { ICartItem, CartItem } from '../models/cart.item.model';

@Pipe({
  name: 'clearance'
})
export class ClearancePipe implements PipeTransform {

  transform(value: Array<ICartItem>): Array<ICartItem> {
    console.log("ClearancePipe::transform, count = "+value.length);
    let lst = value.filter(s=> s.onClearance);
    console.log("ClearancePipe::transform, lst.count = "+lst.length);
    return value.filter(s=> s.onClearance);
  }
}
