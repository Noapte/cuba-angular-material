import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent {
  loginModel = {
    appUrl: environment.appUrl,
    login: 'admin',
    password: 'admin'
  };

  constructor(private cubaRest: CubaRestService) {
  }

  onSubmit() {
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password);
  }
}
