import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent {
  loginModel = {
    appUrl: 'http://localhost:8080/app/rest/',
    login: 'admin',
    password: 'admin'
  };
  constructor(private cubaRest: CubaRestService, private router: Router) {
  }

  onSubmit() {
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password)
      .then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      })
      .catch(() => {
        alert('Login error');
      });
  }
}
