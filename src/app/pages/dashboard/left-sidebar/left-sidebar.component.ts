import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {
  @Output() collapse = new EventEmitter<boolean>(false);

  sideNavService = inject(SidenavService);
  authService = inject(AuthService);
  router = inject(Router);

  collapseMenu() {
    this.sideNavService.toggle();
  }

  items = [
    {

      routerLink: 'dashboard',
      label: 'dashboard',
      icon: 'bx bxs-dashboard',
      isActive:true
    },
    {
      routerLink: 'products',
      icon: 'bx bxs-purchase-tag-alt',
      label: 'products',
      isActive:false
    },
    {
      routerLink: 'pages',
      icon: 'bx bx-compass',
      label: 'pages',
      isActive:false
    },
    {
      routerLink: 'settings',
      icon: 'bx bxs-cog',
      label: 'settings',
      isActive:false
    },
    {
      routerLink:'logout',
      icon: 'bx bx-log-in-circle',
      label:'logout',
      isActive:false
    }
  ];

  checkIsActive(id:number){
    if(id ===this.items.length - 1 ){
      return;
      if(this.authService.logout()){
  
      }
    }
    this.items.forEach((element,index,array)=>{
      if(id===index) {
        array[index].isActive = true;
      }else {
        array[index].isActive = false;
      }
    })
  }
}
