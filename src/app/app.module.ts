import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomercreateComponent } from './customercreate/customercreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorksummaryComponent } from './worksummary/worksummary.component';
import { WorkcreateComponent } from './workcreate/workcreate.component';
import { WorklistComponent } from './worklist/worklist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomerdetailsComponent,
    CustomercreateComponent,
    LoginComponent,
    NavbarComponent,
    WorksummaryComponent,
    WorkcreateComponent,
    WorklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
