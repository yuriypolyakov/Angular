import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Product } from './../models/product.model';
import { ProductService } from './../product/services/product.service';

@Injectable()
export class ProductResolveGuard implements Resolve<Product> {

  constructor(
    private productService: ProductService, 
    private router: Router
  ) {}
  
  resolve(route: ActivatedRouteSnapshot): Promise<Product> {
    
    const id = +route.params['id'];
    console.log("ProductResolveGuard:resolve, id="+id);

    return this.productService.getProduct(id).then(user => {
      // todo: check maybe -1 if id not found
      if (user) {
        console.log("ProductResolveGuard:resolve, found!");
        return user;
        
      } 
      else { // id not found
        this.router.navigate(['/products']);
        return null;
      }
    });
  }
}
