import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { Task } from '../../../core/models/todo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {

 todoService =  inject(TodoService);
 task!:Task;
 
@Input()
set id(taskId:string){
 this.todoService.getTaskById(taskId).then((res:Task | Error)=>{
  this.task = res as Task;
  console.log(res)
  console.log(this.task);
 }).catch((error)=>{
  console.log(error);
 });
}
  

}
