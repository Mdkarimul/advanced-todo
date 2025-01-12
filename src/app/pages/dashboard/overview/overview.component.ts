import { Component, ElementRef, viewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');



  ngAfterViewInit(){
    

}







}
