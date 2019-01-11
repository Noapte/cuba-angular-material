import {Component} from '@angular/core';
import {CubaRestService} from './api/cuba-rest.service';
import {Router} from '@angular/router';

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
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

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
