import { Component, ComponentRef, inject, viewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {
  todoService = inject(TodoService);

  allTask:any[] = [];

  vcr = viewChild('container',{read:ViewContainerRef});
  #componentRef?:ComponentRef<ModalComponent>; 
  showModal(){
    this.vcr()?.clear();
   this.#componentRef =  this.vcr()?.createComponent(ModalComponent);
   this.#componentRef?.instance.close.subscribe(()=>{
    this.#componentRef?.destroy();
   })
   this.#componentRef?.instance.task.subscribe((data)=>{
<<<<<<< HEAD
    alert('karimul');
    console.log(data)
=======
    this.todoService.createTask(data);
>>>>>>> b4b1608f0ca9e4dc242fc79d8f819579eb6ac0cf
   })
  }

ngOnInit(){
 this.todoService.getAllTask().then((response)=>{
   this.allTask = response;
   console.log(this.allTask);
 });
  
}

}
