import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faBorderAll, faGear, faGopuram, faHeart, faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { BtnComponent } from '../../components/btn/btn.component';
import { BoardComponent } from '../../components/board/board.component';
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    BtnComponent,
    BoardComponent,
    CdkAccordionModule,
    NgClass
  ],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello
  faHome = faHome
  faGopuram = faGopuram
  faPlus = faPlus
  faAngleUp = faAngleUp
  faAngleDown = faAngleDown
  faClock = faClock
  faHeart = faHeart
  faBorderAll = faBorderAll
  faUsers = faUsers
  faGear = faGear
}
