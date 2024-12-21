
import { inject, Injectable } from '@angular/core';
import { Firestore,addDoc,setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import  { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor() { }

   private firestore = inject(Firestore);



  createTask(data:any) {

  }




}
