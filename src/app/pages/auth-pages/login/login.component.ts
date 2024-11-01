import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationsService } from '../../../core/services/notifications.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({});
  private authService  = inject(AuthService);
  

  constructor(){
    this.initializeForm();
    
  }
  ngAfterViewInit(){

  }

  initializeForm() {
    this.loginForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  onSave(){
   const formValue =  this.loginForm.value;
   this.authService.createNewUser(formValue);
    this.loginForm.reset();
  }


}
