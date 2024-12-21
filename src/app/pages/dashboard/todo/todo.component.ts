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

  vcr = viewChild('container',{read:ViewContainerRef});
  #componentRef?:ComponentRef<ModalComponent>; 
  showModal(){
    this.vcr()?.clear();
   this.#componentRef =  this.vcr()?.createComponent(ModalComponent);
   this.#componentRef?.instance.close.subscribe(()=>{
    this.#componentRef?.destroy();
   })
   this.#componentRef?.instance.task.subscribe((data)=>{
    console.log(data)
   })
  }

 

}
