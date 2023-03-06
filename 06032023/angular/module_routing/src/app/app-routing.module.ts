import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path:'product',
    loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path: 'users',
    loadChildren:()=> import('./users/users.module').then(m=>UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
