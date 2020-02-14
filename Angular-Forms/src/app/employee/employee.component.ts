import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, } from '@angular/forms';
import { Emp } from '../Model/emp';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpForm:FormGroup;
  submitted=false;
item:Emp;
items:Emp[]=[]
  constructor(private formbuilder:FormBuilder) { 
    
  }

  ngOnInit() {
    this.EmpForm=this.formbuilder.group({
      Id:['',[Validators.required,Validators.pattern('^[E][0-9]{4}$')]],
      Name:['',[Validators.required,Validators.pattern('^[A-Z]{4,20}$')]],
      JoinDate:['',Validators.required],
      Designation:['',Validators.required],
      Mobileno:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      Email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]]
      // acceptTerms:[false,Validators.requiredTrue]
    });
  }
  get f(){
    return this.EmpForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.EmpForm.valid){
      this.item=new Emp()
      alert("register successful")
  console.log(JSON.stringify(this.EmpForm.value)); 
  this.item.Id=this.EmpForm.value["Id"]
  this.item.Name=this.EmpForm.value["Name"]
  this.item.JoinDate=this.EmpForm.value["JoinDate"]
  this.item.Designation=this.EmpForm.value["Designation"]
  this.item.Mobileno=this.EmpForm.value["Mobileno"]
  this.item.Email=this.EmpForm.value["Email"]
  this.item.password=this.EmpForm.value["password"]
  this.items.push(this.item)
    }
  }
  onReset(){
    this.submitted=false;
    this.EmpForm.reset();
  }
}
