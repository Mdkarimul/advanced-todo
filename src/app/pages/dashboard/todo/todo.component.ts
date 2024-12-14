import { Component, viewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  vcr = viewChild('container',{read:ViewContainerRef});
  showModal(){
    this.vcr()?.clear();
    this.vcr()?.createComponent(ModalComponent);
  }

}
