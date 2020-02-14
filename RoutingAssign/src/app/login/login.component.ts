import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  err:string;
  constructor( private route:Router) { }

  ngOnInit() {
  }

  public validate(){
    if(this.uname=="karthik"&&this.pwd=="123")
    {
      sessionStorage.setItem("un",this.uname);
      this.route.navigateByUrl('buyer');
    }
    else if(this.uname=="Varma" && this.pwd=="123")
    {
      sessionStorage.setItem("un1",this.uname);
      this.route.navigateByUrl('seller');
    }
    else if(this.uname=="Sarath" && this.pwd=="123"){
      sessionStorage.setItem("un2",this.uname);
      this.route.navigateByUrl('admin');
    }
    else
    this.err="invalid";
  }
  }
