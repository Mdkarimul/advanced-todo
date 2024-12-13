import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { SignupComponent } from './pages/auth-pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LeftSidebarComponent } from './pages/dashboard/left-sidebar/left-sidebar.component';
import { MainContentComponent } from './pages/dashboard/main-content/main-content.component';

export const routes: Routes = [


{
    path:'',
    component:HomeComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'signup',
    component:SignupComponent
},
{
    path:'dashboard',
    component:DashboardComponent,
    children:[
     
    ]
}



];
