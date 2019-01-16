import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';

@Component({
  templateUrl: './logOut.component.html',
  styleUrls: ['./logOut.component.css']
})
export class LogOutComponent {
  constructor(private cubaRest: CubaRestService) {
  }

  onSubmit() {
    this.cubaRest.logout();
  }
}
