import { NgIf } from '@angular/common';
import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { NgModel ,FormsModule,FormControl} from '@angular/forms';


const enum Status {
  "pending",
  "completed"

}



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
status: 'pending' | 'completed' = 'pending'


close = output<void>();
@Output() task = new EventEmitter<{title:string,description:string,start_date:Date,end_date:Date}>();
submitForm() {
  const data = {
    title:this.title,
    description:this.description,
    start_date: new Date(this.start_date),
    end_date:new Date(this.end_date),
    priority:this.priority,
    remainder:Boolean(this.remainder),
    status: 'pending'
  }

this.task.emit(data);
}

}
