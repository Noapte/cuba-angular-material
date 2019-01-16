import {Component} from '@angular/core';
import {CubaRestService} from './api/cuba-rest.service';
import {Router} from '@angular/router';
import {environment} from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginModel = {
    appUrl: environment.appUrl,
    login: 'admin',
    password: 'admin'
  };
  loggedIn = false;

  constructor(private cubaRest: CubaRestService, private router: Router) {
  }

  onSubmit() {
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password)
      .then((user) => {
        this.loggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      })
      .catch(() => {
        alert('Login error');
      });
  }
}
