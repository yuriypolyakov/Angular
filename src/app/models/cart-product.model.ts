import { ICartItem} from './../cart/models/cart.item.model'
import { Product } from './product.model';

export class CartProductItem {
 
  constructor(
    public cartItem: ICartItem,
    public product: Product
  ) { 
   
  }
}