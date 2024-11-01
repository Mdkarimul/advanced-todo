import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm:FormGroup = new FormGroup({});
  private authService  = inject(AuthService);
  
  constructor() {
   this.initializeForm(); 
  }

  initializeForm() {
    this.signupForm= new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  onSave(){
   const formValue =  this.signupForm.value;
   console.log(formValue);
   debugger;
   this.authService.login(formValue);
    this.signupForm.reset();
  }

}
