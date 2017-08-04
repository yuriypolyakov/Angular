
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './../../models/product.model';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Array<Product>;

  private editedProduct: Product;
  private cartMode: boolean=true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
   private router: Router
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));

      this.route.params
      .switchMap((params: Params) => params['mode'])
      .subscribe(
        (mode: string) => {
          console.log("ProductListComponent::ngOnInit, mode="+mode);
          this.cartMode = mode=="c";
         //console.log(`product list display mode:  ${this.mode}`);
        },
        (err) => console.log(err)
      );
          // listen id from UserFormComponent
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(
        (product: Product) => {
          this.editedProduct = Object.assign({}, product);
          console.log(`Last time you edit product ${JSON.stringify(this.editedProduct)}`);
        },
        (err) => console.log(err)
      );
  }

  ngOnDestroy() {
  }

  
  isEdited(user: Product) {
    //console.log("ProductListComponent::isEdited");
    if (this.editedProduct) {
      //console.log("ProductListComponent::editedProduct.id="+this.editedProduct.id+",  "+(user.id === this.editedProduct.id));
      return user.id === this.editedProduct.id;
    }
    return false;
  }

   addProduct() {
    const link = ['/admin/products/add'];
    this.router.navigate(link);
    // or
    // const link = ['edit', this.user.id];
    // this.router.navigate(link, {relativeTo: this.route});

  }
}
