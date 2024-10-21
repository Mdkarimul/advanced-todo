import { Component } from '@angular/core';
import { PrimaryDefaultOnlyTextComponent } from '../../../shared/compoments/buttons/primary/primary-default-only-text/primary-default-only-text.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [PrimaryDefaultOnlyTextComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
