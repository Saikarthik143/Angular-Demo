import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
    title: ['',Validators.required],
    firstName: ['',[Validators.required,Validators.pattern('^[A-Z][a-z]{6,8}$')]],
    lastName:['',Validators.required],
mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
email:['',[Validators.required,Validators.email,Validators.pattern('^@gmail.com$')]],
password:['',[Validators.required,Validators.pattern('^[A-Z][a-z]{6,8}$'),Validators.maxLength(10),Validators.minLength(1)]],
acceptTerms:[false,Validators.requiredTrue]
  });
}
get f(){
  return this.registerForm.controls;
}
onSubmit(){
  this.submitted=true;
  if(this.registerForm.valid){
    alert("register successful")
console.log(JSON.stringify(this.registerForm.value));  
  }
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
