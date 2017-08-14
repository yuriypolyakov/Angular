
export enum OrderStatus {
    created ,
    inProgress,
    delivered,
    cancelled 
}


export class OrderItem {
 
  constructor(
   public id: number,
   public productId: number,
   public quantity: number,
    //public price: number=0,
   ) {
  }
}

export class Order {
 
  constructor(
    public id: string,
    public price: number,
    public dateOrdered : Date,
    public status : OrderStatus,
    public cartItems : Array<OrderItem>
  ) {
  }
}