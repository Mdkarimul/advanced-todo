
import { inject, Injectable, signal } from '@angular/core';
import { Firestore,addDoc,setDoc,collection, getDoc, getDocs,query, where, doc } from '@angular/fire/firestore';
import { from, Observable, single } from 'rxjs';
import  { Todo } from '../models/todo';
import { NotificationsService } from './notifications.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor() { }

  public blurSignal = signal(false);
   private firestore = inject(Firestore);
   public formState = signal(false);
   private notificationService = inject(NotificationsService);



  //  Create a new task here==================>
   async createTask(data:any) {
    try {
      const check =  this.checkTask(data);
     check.then(async (response)=>{
        if(response && (response!['title'] === data.title)){
         // return from(['Task already exit !']);
          this.formState.set(false);
          this.notificationService.errorMessage('Task already exit !','Task one');
        }else {
          const docRef =  await addDoc(collection(this.firestore,'Task'),data);
          if(docRef.id){
            // return from(['Task created successfully !']);
            this.formState.set(true);
            this.notificationService.successMessage('Task created successfully !','Task created');  
          }
        }
      })
    }catch(error){
      // return from(['Something went wrong !'])
     this.notificationService.errorMessage('Something went wrong !',"Failed task");
    }
  }


  // Check task by task title ==================>
 async checkTask(data:any){
  const collectionRef =  collection(this.firestore,'Task');
  const q = query(collectionRef,where('title',"==",data.title));
  const querySnapShot = await getDocs(q);

  let getData;
  querySnapShot.forEach((doc)=>{
    getData = doc.data();   
  })
  return getData;
  }

  // Get all tasks
 async getAllTask(){
   let data:any[] = [];
   const querySnapShot = await getDocs(collection(this.firestore,'Task'));
   querySnapShot.forEach((doc)=>{
   data.push(doc.data());
   })
   return data;
  }

}
