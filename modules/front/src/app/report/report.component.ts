import { Component } from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';

@Component({
  templateUrl: './report.component.html'
})
export class ReportComponent {
  private name = 'sec$User';

  constructor(private cubaRest: CubaRestService) {
    this.cubaRest.loadSources(this.name).then((users) => {
      console.log(users);
    });
  }
}
