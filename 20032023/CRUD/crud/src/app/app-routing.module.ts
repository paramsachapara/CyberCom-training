import { FunctionExpr } from '@angular/compiler';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path:"users",
    component:UserListComponent
  },
  {
  path:"users/add/:id",
  component:AddComponent
  },
  {
    path:"users/add",
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
