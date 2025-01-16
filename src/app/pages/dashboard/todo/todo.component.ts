import {
  Component,
  ComponentRef,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  TemplateRef,
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
import { NotificationsService } from '../../../core/services/notifications.service';


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
  taskId:string|null = null;
  notificationService = inject(NotificationsService);
  componentRef = ComponentRef<ModalComponent>;
 



 
  seeTaskDetails(id:any,event:Event){
    const HtmlElement = event.target as HTMLInputElement;
    if(HtmlElement.tagName ==="I" , HtmlElement.classList.contains('bx') && HtmlElement.classList.contains('bx-checkbox')){
      this.taskId = id;
      HtmlElement.classList.remove('bx-checkbox')
      HtmlElement.classList.add('bx-checkbox-checked');
      return;
    }else if(HtmlElement.tagName ==="I" , HtmlElement.classList.contains('bx') && HtmlElement.classList.contains('bx-checkbox-checked')){
      this.taskId = null;
      HtmlElement.classList.remove('bx-checkbox-checked')
      HtmlElement.classList.add('bx-checkbox');
      return;
    }
    this.router.navigate(['/dashboard/taskdetails/',{id:id}]);
  }

  async taskAction(event:Event){
   const value = (event.target as HTMLSelectElement).value;
   if(!this.taskId && value !==""){
     this.notificationService.errorMessage('Please select atleast one task','Action');
   }  
  
   if(value==="edit" && this.taskId){
    //call edit function here

    const currentTask = await this.allTask.filter((task)=> task.id==this.taskId);
    this.#componentRef?.instance.formStatus.set(true);
    this.showModal();
   this.#componentRef?.setInput('formdata',currentTask);
   this.#componentRef?.setInput('formStatus',true);
   }
   if(value==="delete" && this.taskId){
    //call delete function here
     this.todoService.deleteTask(this.taskId).then((res)=>{
      this.notificationService.successMessage(res as string,'Delete message');
      this.getAllTask();
      
     }).catch((error)=>{
      this.notificationService.errorMessage(error,'Failed message');
     });
   }
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

closePopup(){
  this.#componentRef?.instance.close.subscribe(() => {
    this.#componentRef?.destroy();
    this.todoService.blurSignal.set(false);
    this.getAllTask();
  });
}

  showModal() {
    this.vcr()?.clear();
    this.#componentRef = this.vcr()?.createComponent(ModalComponent);
    this.todoService.blurSignal.set(true);
    this.closePopup()
    this.#componentRef?.instance.task.subscribe((data) => {
      this.todoService.createTask(data).then((res)=>{
        alert('res');
       this.#componentRef?.instance.close.emit();
       this.getAllTask();
      }).catch((error)=>{

      });
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
      this.allTask = [];
      response.forEach((Task)=>{
        this.allTask.push(Task);
      })
    });
  }


  ngOnDestroy(){
    this.unSubscribeTimeStatus.unsubscribe();
  }
}
