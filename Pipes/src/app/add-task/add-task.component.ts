import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
item:Task
  constructor() {
    this.item=new Task();
   }

  ngOnInit() {
  }
public Add(){
  console.log(this.item);
}
public Reset(){
  sessionStorage.clear();
}
}
