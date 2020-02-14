import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
una:string;
  constructor(private route:Router) {
    if(sessionStorage.getItem("un1")){
      this.una=sessionStorage.getItem("un1");
      console.log(this.una);
    }
    else
    this.route.navigateByUrl('login');
   }

  ngOnInit() {
  }
  public logout(){
    sessionStorage.clear();
    this.route.navigate(['login']);
  }

}
