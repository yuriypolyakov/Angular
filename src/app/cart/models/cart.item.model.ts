export interface ICartItem{  
    id: number;
    name: string;
    quantity: number;
    price : number;
    shipped?: boolean;
    paid?: boolean;

}


export class CartItem implements ICartItem{
 
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number=0
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }
}