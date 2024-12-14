import { inject, Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from '@angular/fire/auth';
import { User } from '../models/user';
import { NotificationsService } from './notifications.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private auth = inject(Auth);
  private authState = getAuth();
  private route = inject(Router);
  private user = this.authState.currentUser;
  private notification = inject(NotificationsService);
  constructor() {

    console.log(this.user);
    onAuthStateChanged(this.auth,(user)=>{
      console.log(user)
    })
   }
  
  createNewUser(user:User) {
    createUserWithEmailAndPassword(this.auth,user.email,user.password).then((userCredential)=>{
      const user = userCredential.user;
      localStorage.setItem('User',JSON.stringify(user.email));
      this.notification.successMessage('User register successfully !','User registration ');
    }).catch((error)=>{
      this.notification.errorMessage(error.code,error.message);
    })
  }

  login(user:User){
   signInWithEmailAndPassword(this.auth,user.email,user.password).then((userCredential)=>{
    const user = userCredential.user;
    console.log(user);
    this.notification.successMessage('User login successfully !','Login user');
    setTimeout(()=>{
     this.route.navigate(['dashboard/overview']);
    },5000)
   }).catch((error)=>{
    this.notification.errorMessage(error.code,error.message);
   });
  }


logout(){
  return true;
}










}
