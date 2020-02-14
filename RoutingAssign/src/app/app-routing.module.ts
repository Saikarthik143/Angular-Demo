import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewiyemsComponent } from './viewitems/viewiyems.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { ViewcartComponent } from './viewcart/viewcart.component';


const routes: Routes = [
  {path:'buyer', component:BuyerComponent,children:[
    {path:'buyitem',component:BuyitemComponent},
    {path:'viewcart',component:ViewcartComponent}
  ]},
  {path:'seller', component:SellerComponent,children:[
    {path:'additem',component:AdditemComponent},
    {path:'viewitems',component:ViewiyemsComponent}
  ]},
  {path:'admin', component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
