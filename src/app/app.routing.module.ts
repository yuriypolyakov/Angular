import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

import { HomeComponent, PageNotFoundComponent,LoginComponent, AboutComponent   } from './components';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: { title: 'Login' }
  },
  /*{
    path: 'admin',
    //canLoad: [AuthGuard],
    //loadChildren: 'app/admin/admin.module#AdminModule',
        data: { title: 'Admin' }
  },
  {
    path: 'products',
    loadChildren: 'app/product/product.module#ProductModule',
    data: { preload: true, title: 'Products' }
  },*/
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

export let appRouterComponents = [HomeComponent,PageNotFoundComponent,LoginComponent,AboutComponent ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes )
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule {}
