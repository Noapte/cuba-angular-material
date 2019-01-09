import {Injectable} from '@angular/core';
import {CubaApp} from '@cuba-platform/rest/dist-node/cuba';

@Injectable()
export class CubaRestService {

  cubaApp: CubaApp;

  login(appUrl: string, login: string, password: string): Promise<{}> {
    this.cubaApp = new CubaApp('', appUrl);
    return this.cubaApp.login(login, password);
  }

  logout(): any {
    this.cubaApp.loadEntities('sec$User').then((users) => {
      console.log(users);
    })
      .catch(() => {
        alert('Login error');
      });
    // console.log(this.cubaApp.getUserInfo())
    // return this.cubaApp.logout().then(()=> {
    //   console.log('po log out')
    //   location.reload();
    //
    // });
  }

}
