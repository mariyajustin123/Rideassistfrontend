import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomercreateComponent } from './customercreate/customercreate.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { WorksummaryComponent } from './worksummary/worksummary.component';

const routes: Routes = [
  {path:"worksummary/:id",component:WorksummaryComponent},
  {path:"customers",component:CustomerlistComponent},
  {path:"customer/add",component:CustomercreateComponent},
  {path:"customer/:id",component:CustomerdetailsComponent},
  
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
