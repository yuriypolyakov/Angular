import { Component, OnInit, Input  } from '@angular/core';

import { Product } from './../../../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../../cart/cart.service';
import { CartProductService } from './../../../services/cart-product.service';
import { ProductAddedService } from './../../../services/product-added.service';
import { ConfirmDialogService } from './../../../services/confirm-dialog.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

@Input() product: Product;
@Input() cartMode: boolean;

  constructor(   private router: Router,
    private route: ActivatedRoute,
  private cartService: CartService,
private cartProductService: CartProductService,
    private productAddedService: ProductAddedService,
  private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
  }

   editProduct() {
    const link = ['admin/products/edit', this.product.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', this.user.id];
    // this.router.navigate(link, {relativeTo: this.route});
  }

  canDelete() :boolean
  {
    return this.cartProductService.canRemoveProduct(this.product.id);
  }

  deleteProduct() {
    if (this.confirmDialogService.confirm("delete product "+this.product.name+" ?"))
    {
      this.cartProductService.removeProduct(this.product.id);
    }
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
