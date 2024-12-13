import { Component, inject } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet,NgStyle],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {


  sideNavService = inject(SidenavService);
  

  constructor(){

  }
  ngAfterViewInit(){

  }
  
}
