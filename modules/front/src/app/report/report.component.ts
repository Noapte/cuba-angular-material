import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';
import {map} from 'rxjs/operators';
import {IProduct} from '../products/product';


@Component({
  templateUrl: './report.component.html'
})
export class ReportComponent {
  private name = 'sec$User';
  private users: Array<{}>;

  constructor(private cubaRest: CubaRestService) {
    this.cubaRest.loadSources(this.name)
      .then((users) => {
        this.users = users.map(user => {
          return {
            name: user.name,
            login: user.login
          };
        });
      });
  }
}
