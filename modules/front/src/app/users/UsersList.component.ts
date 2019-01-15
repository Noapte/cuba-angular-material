import {Component} from '@angular/core';
import {CubaRestService} from './../api/cuba-rest.service';

@Component({
  templateUrl: './UsersList.component.html',
  styleUrls: ['UsersList.component.css']
})
export class UsersListComponent {
  private name = 'sec$User';
  users: Array<{}>;
  displayedColumns: string[] = ['login', 'name', 'role'];

  constructor(private cubaRest: CubaRestService) {
    this.cubaRest.loadSources(this.name)
      .then((users) => {
        this.users = users.map(user => {
          return {
            name: user.name,
            login: user.login,
            role: 'default'
          };
        });
      });
  }
}
