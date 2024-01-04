import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faC, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = signal<boolean>(false)

  faClose = faClose

  changeIsOpen(){
    this.isOpen.set(!this.isOpen())
  }
}
