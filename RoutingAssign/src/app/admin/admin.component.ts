import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
unam:string;
  constructor(private route:Router) { 
    if(sessionStorage.getItem("un2")){
      this.unam=sessionStorage.getItem("un2");
      console.log(this.unam);
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
