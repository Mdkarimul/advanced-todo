import { NgIf } from '@angular/common';
import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { NgModel ,FormsModule,FormControl} from '@angular/forms';



@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

title = '';
description = '';

close = output<void>();
@Output() task = new EventEmitter<{title:string,description:string}>();
submitForm() {
<<<<<<< HEAD
     if(this.title.length || this.description.length){
      const data = {
        title:this.title,
        description:this.description
      }
    this.task.emit(data);
     }else {
      alert('Invalid form !');
     }
=======
  const data = {
    title:this.title,
    description:this.description
  }
this.task.emit(data);
>>>>>>> b4b1608f0ca9e4dc242fc79d8f819579eb6ac0cf
}

}
