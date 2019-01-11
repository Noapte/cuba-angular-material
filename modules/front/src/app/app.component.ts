import {Component} from '@angular/core';
import {CubaRestService} from './api/cuba-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginModel = {
    appUrl: 'http://localhost:8080/app/rest/',
    login: 'admin',
    password: 'admin'
  };

  loggedIn = false;

  constructor(private cubaRest: CubaRestService) {
  }

  onSubmit() {
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password)
      .then((user) => {
        this.loggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
      .catch(() => {
        alert('Login error');
      });
  }
}
