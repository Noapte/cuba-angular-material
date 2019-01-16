import {Component} from '@angular/core';
import {CubaRestService} from './api/cuba-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private cubaRest: CubaRestService) {
  }

  isLogged() {
    return this.cubaRest.logged;
  }
}
