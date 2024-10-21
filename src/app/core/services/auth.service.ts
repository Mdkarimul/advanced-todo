import { inject, Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  constructor() { }

  createNewUser(user:User) {
    createUserWithEmailAndPassword(this.auth,user.email,user.password).then((userCredential)=>{
      console.log(userCredential);
      if(userCredential){
        
      }
    }).catch((error)=>{
      console.log(error);
    })
  }


}
