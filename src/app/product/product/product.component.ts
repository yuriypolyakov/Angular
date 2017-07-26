import { Component, OnInit, Input  } from '@angular/core';

import { Product } from './../../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../cart/cart.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product: Product;

  constructor(   private router: Router,
    private route: ActivatedRoute,
  private cartService: CartService) { }

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
    //this.cartService.create();
  }
}
