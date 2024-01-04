import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = signal<boolean>(false)
  isOpenBody = signal<boolean>(false)

  faClose = faClose
  faBell = faBell
  faInfoCircle = faInfoCircle

  changeIsOpen(){
    this.isOpen.set(!this.isOpen())
  }

  changeIsOpenBody(){
    this.isOpenBody.set(!this.isOpenBody())
  }
}
