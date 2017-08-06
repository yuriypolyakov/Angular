import { Injectable } from '@angular/core';
import { CartProductItem } from './../models/cart-product.model';
import { ProductService } from './../product/services/product.service';
import { CartService,Info } from './../cart/cart.service';
import {Subscription} from 'rxjs/Subscription';
import { Product } from './../models/product.model';
import { OrdersService } from './../orders/services/orders.service';
import { LocalCartService } from './local-cart.service';


export interface Info {
   total:number;
   totalSum:number;
   updated : Date
}

@Injectable()
export class CartProductService {

    items: Array<CartProductItem> = [];
    productitems : Array<Product> = [];

    info: Info = { total : 0, totalSum :0, updated : new Date() };
    subscription:Subscription;

    constructor(
        private cartService: CartService,
        private productService: ProductService,
        private ordersService: OrdersService,
        private localCartService: LocalCartService,
        
        ) {
         this.subscription = this.cartService.navItem$
            .subscribe(item => { 
            console.log("CartProductService::subscribe, "+item);
             this.productService.getProduct(item).then(
                product => {
                    if (product)
                        {
                      product.quantity--;
                    this.productService.updateProduct(product);
                        }
                });

           
           this.updateTotals();});
        }

        private loadFromStorage()
        {
            let storedItems =  this.localCartService.getItem("444");
            console.log("loadFromStorage, "+storedItems);
             this.items = storedItems;
             storedItems.forEach(element => {
                console.log("loadFromStorage element, id ="+element.cartItem.id);
                //this.addProduct(element.product);
             });
        }

    getItems(): Array<CartProductItem> {
       this.fillItems();

    return this.items;
    }

    private fillItems()
    {
     this.items.length=0;

        let cartitems = this.cartService.getCartItems().filter(s=>s.orderId == null);
        this.productService.getProducts()
      .then(users => this.productitems = users)
      .catch((err) => console.log(err));
    
    cartitems.forEach(element => {
      console.log("CartProductService.fillItems, getProduct, id ="+element.productId);
  
      let product= this.productitems.find(s=> s.id==element.productId);
     
      if (product) {
          console.log("CartProductService.fillItems, product found");
         this.items.push(new CartProductItem(element,product));
       
      } 
      else { // id not found
        console.log("CartProductService.fillItems, product not found, id ="+element.productId);
      }
      });

      
     console.log("CartProductService.fillItems, done");
    }

    private countCartSum(){
        //console.log("CartProductService::countCartSum");
        this.info.totalSum=0;
        this.items.forEach(
            s => {
                 console.log("CartProductService s.cartItem.quantity = "+s.cartItem.quantity+", s.product.price="+s.product.price);
                this.info.totalSum += s.cartItem.quantity*s.product.price;
            }
        ) ;
         console.log("CartProductService::countCartSum = "+this.info.totalSum);
    }   

    private countItemsQuantityInCart(){
        
        this.info.total = 0;
        this.items.forEach(
            s => this.info.total += s.cartItem.quantity
        ) ;
        console.log("CartProductService::countItemsQuantityInCart = "+this.info.total);
    }

    private updateTotals()
    {
        console.log("CartProductService::updateTotals");
        this.fillItems();
        this.countCartSum();
        this.countItemsQuantityInCart();
        
        this.info.updated = new Date(); 
        //console.log("CartProductService::updateTotals info="+this.info.total);
        
    }

    addProductToCart(productId: number)
    {
        if (this.isProductInCart(productId)) return;

        console.log("CartProductService::addProductToCart");
        this.productService.getProduct(productId).then(
            product => {
             this.addProduct(product);
        });

    }

    private addProduct(product : Product)
    {
        if (product) {
             this.cartService.addProduct(product.id,1);
          } 
            else { // id not found
            
        }
       
    }

    public isProductInCart(id:number) : boolean
    {
        return this.cartService.isProductInCart(id);
    }

    removeCartItem(cartId: number)
    {
        console.log("CartProductService::removeCartItem, id="+cartId);

        let item = this.items.find(s=> s.cartItem.id==cartId);

        if (item==null)
        { 
            console.warn("CartProductService::removeCartItem can't find item with id="+cartId);
            return;
        }
        

        item.product.quantity+=item.cartItem.quantity;

       
    
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);  

         this.cartService.delete(cartId);
         this.updateTotals();
      
    }

    canRemoveProduct(productId: number) : boolean
    {
        // console.log("CartProductService::canRemoveProduct, id="+productId);

        let item = this.items.find(s=> s.product.id==productId);

        if (item==null)
        { 
            return true;
        }
        
        return false;
    }

    removeProduct(productId: number)
    {
        console.log("CartProductService::removeProduct, id="+productId);

      this.productService.delete(productId);
    }

    makeOrder()
    {
        console.log("CartProductService::makeOrder");
        let cartItems : Array<number> = [];
        
        this.items.forEach( s => 
        {
            cartItems.push(s.cartItem.id);
        } );
        let orderId =  this.ordersService.addOrder(cartItems);
        this.cartService.moveCartItemsToOrder(orderId);
        this.fillItems();
        this.updateTotals();
    }
}