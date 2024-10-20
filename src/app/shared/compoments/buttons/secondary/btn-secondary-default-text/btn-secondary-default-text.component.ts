import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-secondary-default-text',
  standalone: true,
  imports: [],
  templateUrl: './btn-secondary-default-text.component.html',
  styleUrl: './btn-secondary-default-text.component.scss'
})
export class BtnSecondaryDefaultTextComponent {

  @Input() text:string = '';

}
