import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-default-only-text',
  standalone: true,
  imports: [],
  templateUrl: './primary-default-only-text.component.html',
  styleUrl: './primary-default-only-text.component.scss'
})
export class PrimaryDefaultOnlyTextComponent {

  @Input() text:string = '';

}
