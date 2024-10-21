import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { LoginComponent } from './pages/login/login/login.component';

export const routes: Routes = [


{
    path:'',
    component:HeroComponent
},
{
    path:'login',
    component:LoginComponent
}



];
