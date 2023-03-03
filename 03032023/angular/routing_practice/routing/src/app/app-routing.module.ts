import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AboutUsComponent } from './about-us/about-us.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactOfficeComponent } from './contact-office/contact-office.component';
import { ContactHeadquaterComponent } from './contact-headquater/contact-headquater.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component: AboutUsComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'contactus/contactoffice',
    component:ContactOfficeComponent
  },
  {
    path:'contactus/contactheadquater',
    component:ContactHeadquaterComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'users/users/:id',
    component:UserComponentComponent
  },
  

  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
