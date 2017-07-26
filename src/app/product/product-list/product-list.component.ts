
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

  private editedUser: Product;

  constructor(
    private userArrayService: ProductService,
    private route: ActivatedRoute,
   private router: Router
  ) { }

  ngOnInit() {
    this.userArrayService.getProducts()
      .then(products => this.products = products)
      .catch((err) => console.log(err));

          // listen id from UserFormComponent
    /*this.route.params
      .switchMap((params: Params) => this.userArrayService.getUser(+params['id']))
      .subscribe(
        (user: User) => {
          this.editedUser = Object.assign({}, user);
          console.log(`Last time you edit user ${JSON.stringify(this.editedUser)}`);
        },
        (err) => console.log(err)
      );
*/
  }

  ngOnDestroy() {
  }

  
  isEdited(user: Product) {
    console.log("isEdited");
    if (this.editedUser) {
      console.log("editedUser.id="+this.editedUser.id+",  "+(user.id === this.editedUser.id));
      return user.id === this.editedUser.id;
    }
    return false;
  }

   addProduct() {
    const link = ['/products/add'];
    this.router.navigate(link);
    // or
    // const link = ['edit', this.user.id];
    // this.router.navigate(link, {relativeTo: this.route});

  }
}
