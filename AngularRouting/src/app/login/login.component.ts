import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
password:string;
errmsg:string;
  constructor(private route:Router) {

   }

  ngOnInit() {
  }
public validate(){
  if(this.uname=="Karthik" && this.password=="12345")
  {
    //set value in session
    sessionStorage.setItem("un",this.uname)
    this.route.navigateByUrl("user");
//user is name of the route
  }
  else{
    this.errmsg="invalid"
  }
}
}
