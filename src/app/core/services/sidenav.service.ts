import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  constructor() {

  }

  collapse: WritableSignal<boolean> = signal(false);

  toggle() {
    this.collapse.set(!this.collapse());
  }

  getWindowWidth(){
    
  }

  get sideNavWidth() {
    return this.collapse() ? '50px' : '200px';
  }
}
