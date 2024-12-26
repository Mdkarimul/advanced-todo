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
  const data = {
    title:this.title,
    description:this.description
  }
this.task.emit(data);
}

}
