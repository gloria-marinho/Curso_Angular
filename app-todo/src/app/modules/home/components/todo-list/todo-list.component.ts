import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  public taskList: Array<TaskList> = [];
  constructor() { };
  ngOnInit() {};
  public desleteItemtaskList(evnt: number){
    this.taskList.splice(evnt, 1);
  }
  public deleteAllTaskList(){
    const confirm = window.confirm("vocẽ deseja realmente Deletar tudo?")

    if(confirm){}
    this.taskList = [];
  }

}