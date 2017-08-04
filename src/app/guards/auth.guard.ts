import { Injectable }  from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                      from '@angular/router';
import { AuthService } from './../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild  {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    	console.log('canActivateChild Guard is called');
return this.canActivate(route, state);
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('CanActivateGuard is called');
    const url: string = state.url;
    return this.checkLogin(url);
  }
}
