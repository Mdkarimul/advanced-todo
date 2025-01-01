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
start_time = '';
end_time = '';
start_date:number = 0;
end_date:number = 0;
priority = '';
remainder:boolean = false;


close = output<void>();
@Output() task = new EventEmitter<{title:string,description:string,start_date:number,end_date:number}>();
submitForm() {
  const data = {
    title:this.title,
    description:this.description,
    start_date: this.start_date,
    end_date:this.end_date,
    priority:this.priority,
    remainder:this.remainder
  }

this.task.emit(data);
}

}
