export interface ICartItem{  
    id: number;
    name: string;
    quantity: number;
    price : number;
    shipped?: boolean;
    paid?: boolean;
    onClearance : boolean;
}


export class CartItem implements ICartItem{
 
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public price: number=0,
    public onClearance: boolean=false,
  ) { }
}