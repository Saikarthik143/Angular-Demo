import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  obj:Task[]=[];
  task:string;
  priority:Range;
  startdate:Date;
  enddate:Date;
  obj2:Task;
list: any;
constructor(private route:Router) { 
  


}
ngOnInit() {
}
public Add(){
this.obj2=new Task();
this.obj2.Task=this.task;
this.obj2.priority=this.priority;
this.obj2.startdate=this.startdate;
this.obj2.enDdate=this.enddate;
if(localStorage.getItem("t2")){
  this.obj=JSON.parse(localStorage.getItem("t2"));
}
this.obj.push(this.obj2)
console.log(this.obj2);
localStorage.setItem('t2',JSON.stringify(this.obj));
this.route.navigateByUrl('viewtask');
}
public Reset(){
  this.obj2.Task='';
this.obj2.priority=null;
this.obj2.startdate=null;
this.obj2.enDdate=null;

}
}
