import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,

  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate :  [AuthGuard]
  },

  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
