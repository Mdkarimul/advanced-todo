import {
  Component,
  ComponentRef,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
  viewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { TodoService } from '../../../core/services/todo.service';
import { fromEvent, interval, Observable, take, timestamp, Unsubscribable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  host: {
   
  }
})
export class TodoComponent {

  router = inject(Router)


 
  seeTaskDetails(id:any){
    this.router.navigate(['/dashboard/taskdetails/',{id:id}]);
  }

  
  constructor() {
  }

  todoService = inject(TodoService);

  allTask: any[] = [];
  searchItem: any[] = [];
  searchState = signal<boolean>(false);
  vcr = viewChild('container', { read: ViewContainerRef });
  #componentRef?: ComponentRef<ModalComponent>;
  timerStatus  = interval(1000);
  timeStamp!:Timestamp;
  unSubscribeTimeStatus!:Unsubscribable;


//Show model to add new task =====================================>
  showModal() {
    this.vcr()?.clear();
    this.#componentRef = this.vcr()?.createComponent(ModalComponent);
    this.todoService.blurSignal.set(true);
    this.#componentRef?.instance.close.subscribe(() => {
      this.#componentRef?.destroy();
      this.todoService.blurSignal.set(false);
    });
    this.#componentRef?.instance.task.subscribe((data) => {
      this.todoService.createTask(data);
    });
  }

  // Get all task after ngonInit ====================>
  async ngOnInit() {
    await this.getAllTask();
    await this.getTaskTime();
  this.unSubscribeTimeStatus =   this.timerStatus.subscribe((res)=>{
     this.getTaskTime();
    })
  }

  getTaskTime(){
    this.allTask.map((task)=>{
    let fireBaseStartTime = task.start_date.seconds; 
    let firebaseEndTime = task.end_date.seconds;
    if((new Date(fireBaseStartTime) < new Date()) && (task.status === "pending")){
      this.todoService.updateTaskStatus(task.title).then((res)=>{
        this.getAllTask();
      });
    }
 
    })
  }


  



  // Search task by title =====================================>
  hideOption(input:HTMLInputElement) {
    this.searchState.set(false);
    this.searchItem = [];
  }
  showOption() {
    this.searchState.set(true);
    this.searchItem = this.allTask;
  }
  getInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchState.set(true);
    if (inputElement) {
      this.searchItem = [];
      const res = this.allTask.filter((task) =>
        task.title.includes(inputElement.value)
      );
      this.searchItem = res;
     this.getTaskByTitle(inputElement.value);
    }
  }
  readSearchItem(input: HTMLInputElement, li: HTMLLIElement) {
    const liContent: string = li.textContent ?? '';
    input.value = liContent;
    this.searchState.set(false);
    this.searchItem = [];
   this.getTaskByTitle(liContent);
  }
  // End search task by title =====================================>


  // Get task by title ====================================>
  getTaskByTitle(title:string) {
    this.todoService.getDataByTitle(title).then((res)=>{
      this.allTask = [];
      this.allTask.push(res);
    }).catch((error)=>{
      this.getAllTask();
    });
  }


  //Get all task at one time ========================>
  getAllTask() {
    this.todoService.getAllTask().then((response) => {
      console.log(response);
      response.forEach((Task)=>{
        this.allTask.push(Task);
      })
      console.log(this.allTask);
      //this.allTask = response;
    });
  }


  ngOnDestroy(){
    this.unSubscribeTimeStatus.unsubscribe();
  }
}
