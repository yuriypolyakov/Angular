import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
//import { ProductService } from './../../product/services/product.service';
import { ProductService,ProductPromiseService  } from './../../product/';
import { ActivatedRoute, Params,Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

products: Array<Product>;

  private editedProduct: Product;

  constructor(
    private productService: ProductService,
    private productPromiseService: ProductPromiseService,
    private route: ActivatedRoute,
   private router: Router
  ) { }

  ngOnInit() {
    this.productPromiseService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));

          // listen id from UserFormComponent
    this.route.params
      //.switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .switchMap((params: Params) => this.productPromiseService.getProduct(+params['id']))
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

  deleteProduct(product: Product) {
    // this.cartProductService.removeProduct(this.product.id);
    this.productPromiseService.delete(product.id)
      .then(() => this.products = this.products.filter(t => t.id !== product.id))
      .catch(err => console.log(err));
  }


}
