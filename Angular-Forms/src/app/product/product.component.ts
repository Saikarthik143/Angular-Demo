import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductForm:FormGroup
  Submit:boolean;
  constructor(private formbuilder:FormBuilder) {

   }

  ngOnInit() {
    this.ProductForm=this.formbuilder.group({
      ProductId:['',Validators.required],
      ProductName:['',Validators.required],
      Price:['',Validators.required],
      Stock:['',Validators.required]

    });
  }
  onSubmit(){
    this.Submit=true;
    if(this.ProductForm.valid){
      alert("login success");
    }
    else
    alert("invalid ")
    return;
  }
get f(){
 return this.ProductForm.controls;
}
onReset(){
  this.Submit=false;
  this.ProductForm.reset();
}
}
