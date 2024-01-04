import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faGopuram, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { BtnComponent } from '../../components/btn/btn.component';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, BtnComponent, BoardComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello
  faHome = faHome
  faGopuram = faGopuram
  faPlus = faPlus

  faClock = faClock
}
