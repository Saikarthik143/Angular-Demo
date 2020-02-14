import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  price=200;
  DOB:Date=new Date(1990,1,23);
  name:string="karthik";
}
