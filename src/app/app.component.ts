import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms'; 
import { of,map,fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'advanced-todo';


  ngAfterViewInit(){
    const obs$ = ajax('https://bible-api.com/john%203:16').pipe();

    const clicks = fromEvent<PointerEvent>(document,'click');
    const positions  = clicks.pipe(map(ev=>ev));
    positions.subscribe({
      next:(result)=>console.log(result)
    })


  }

 
}
