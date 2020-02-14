import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewiyemsComponent } from './viewitems/viewiyems.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddRemoveBuyerComponent } from './add-remove-buyer/add-remove-buyer.component';
import { AddRemoveSellerComponent } from './add-remove-seller/add-remove-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SellerComponent,
    
    AdminComponent,
    LoginComponent,
    UserComponent,
    BuyitemComponent,
    ViewcartComponent,
    PaymentComponent,
    AdditemComponent,
    ViewiyemsComponent,
    AddCategoryComponent,
    AddRemoveBuyerComponent,
    AddRemoveSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
