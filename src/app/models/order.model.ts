
export enum OrderStatus {
    created ,
    inProgress,
    delivered,
    cancelled 
}

export class Order {
 
  constructor(
    public id: number,
    public price: number,
    public dateOrdered : Date,
    public status : OrderStatus,
    public cartItems : Array<number>
  ) {
  }
}