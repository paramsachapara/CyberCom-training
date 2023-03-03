import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  list:any[]=[];


  add_Task(task:string,priority:string){
    
    this.list.push({id:this.list.length, 
      task_detail:task,
      priority_value:priority});
    console.log(this.list);
  
  }
  remove(item:number){
    this.list.splice(item,1)
  };
  input: string="";
}
