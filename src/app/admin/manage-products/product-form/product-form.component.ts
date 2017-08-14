import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';

import { Product } from './../../../models/product.model';
import { ProductPromiseService } from './../../../product/';
import 'rxjs/add/operator/switchMap';
//import { DialogService }  from './../../services/dialog.service';

@Component({
  selector: 'app-product-form2',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  oldUser: Product;

  constructor(
    //private productService: ProductService,
    private productPromiseService: ProductPromiseService,
    private route: ActivatedRoute,
    private router: Router,
    //private dialogService: DialogService

  ) { console.log("ProductFormComponent::constructor");}

  ngOnInit(): void {

    this.product = new Product(null, '', 0,0);

   this.route.data.forEach((data: { product: Product }) => {
     console.log("ProductFormComponent::ngOnInit, routedata="+data.product);
      this.product = Object.assign({}, data.product);
      console.log("ProductFormComponent::ngOnInit, this.product="+this.product.id);
      this.oldUser = data.product;
    });


  }

  ngOnDestroy(): void {
  }

  saveProduct() {
    const product = new Product(
      this.product.id,
      this.product.name,
      this.product.quantity,
      this.product.price,
    );

     if (product.id) {
      //this.productService.updateProduct(product);
       this.oldUser = this.product;
      this.productPromiseService.updateProduct(product)
      .then(
        () => this.router.navigate(['/admin/products', {id: product.id}]) 
      );

    } 
    else {
      //this.productPromiseService.addProduct(product);
      this.oldUser = this.product;
      this.router.navigate(['/admin/products']);
    }
  }

  goBack() { 
     this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  /*canDeactivate(): Promise<boolean> | boolean {
    console.log("ProductFormComponent::canDeactivate");
    if (!this.oldUser || this.oldUser.firstName === this.user.firstName) {
      return true;
    }
    
    return this.dialogService.confirm('Discard changes?');
}*/

}
