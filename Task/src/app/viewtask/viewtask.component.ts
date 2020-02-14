import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../Model/task';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  obj:Task[]=[];
  task:string;
  priority:number;
  startdate:Date;
  enddate:Date;
  constructor(private route:Router) { 
    if(localStorage.getItem("t2")){
    this.obj=JSON.parse(localStorage.getItem("t2"))
    }
  }

  ngOnInit() {
  }

}
