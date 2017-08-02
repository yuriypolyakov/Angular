import { Component, OnInit, Input  } from '@angular/core';

import { Product } from './../../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../cart/cart.service';
import { CartProductService } from './../../services/cart-product.service';
import { ProductAddedService } from './../../services/product-added.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product: Product;
@Input() cartMode: boolean;

  constructor(   private router: Router,
    private route: ActivatedRoute,
  private cartService: CartService,
private cartProductService: CartProductService,
    private productAddedService: ProductAddedService) { }

  ngOnInit() {
  }

   editProduct() {
    const link = ['/products/edit', this.product.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', this.user.id];
    // this.router.navigate(link, {relativeTo: this.route});

  }

  addProductToCart()
  {
    this.cartProductService.addProductToCart(this.product.id);
    return this.productAddedService.inform('Product added to cart!');
  }

  productInCart() : boolean
  {
    return this.cartService.isProductInCart(this.product.id);
  }
}