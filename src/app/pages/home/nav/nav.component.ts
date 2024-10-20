import { Component } from '@angular/core';
import { PrimaryDefaultOnlyTextComponent } from '../../../shared/compoments/buttons/primary/primary-default-only-text/primary-default-only-text.component';
import { BtnSecondaryDefaultTextComponent } from '../../../shared/compoments/buttons/secondary/btn-secondary-default-text/btn-secondary-default-text.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [PrimaryDefaultOnlyTextComponent,BtnSecondaryDefaultTextComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
