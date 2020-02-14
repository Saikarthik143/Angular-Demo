import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { User } from '../Model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted:boolean;
item:User
  constructor(private formbuilder:FormBuilder) {
    this.item=new User();
   }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      uname:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    else
    {
      alert("form is validate");
      console.log(this.loginForm.value)//returm java script object
      console.log(JSON.stringify(this.loginForm.value)) //return json obj
      console.log(this.loginForm.value["uname"])
      console.log(this.loginForm.value["pwd"])
      this.item.uname=this.loginForm.value["uname"]
      this.item.pwd=this.loginForm.value["pwd"]
      console.log(this.item)

    }

  }
  get f(){
    return this.loginForm.controls;
  }
onReset(){
  this.submitted=false;
  this.loginForm.reset();
}

}
