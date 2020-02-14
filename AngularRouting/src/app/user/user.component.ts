import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
uname:string;
  constructor(private route:Router) { 
    //read sessio9n storage
    if(sessionStorage.getItem("un")){
    this.uname=sessionStorage.getItem("un");
    console.log(this.uname)
  }
  else{
    this.route.navigateByUrl('login')
  }
  }
  ngOnInit() {
  }
public logout(){
  sessionStorage.clear();
  this.route.navigate(['login']);
  
}
}
