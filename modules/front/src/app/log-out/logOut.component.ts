import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './logOut.component.html',
  styleUrls: ['./logOut.component.css']
})
export class LogOutComponent {
  constructor(private cubaRest: CubaRestService, private router: Router) {
  }

  onSubmit() {
    this.cubaRest.logout()
      .then(() => {
        location.reload();
        this.router.navigate(['/']);
      })
      .catch(() => {
        alert('Log out error');
      });
  }
}
