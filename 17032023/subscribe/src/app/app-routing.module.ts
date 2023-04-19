import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"users",
    loadChildren:() => import('./user/user.module').then((m) => m.UserModule),
    canActivate:[AuthGuard]
  },
  {
    path:"products",
    loadChildren:() => import('./products/products.module').then((p) => p.ProductsModule),
    
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
