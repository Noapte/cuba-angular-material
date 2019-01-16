import {Injectable} from '@angular/core';
import {CubaApp} from '@cuba-platform/rest/dist-node/cuba';
import {Router} from '@angular/router';

@Injectable()
export class CubaRestService {

  constructor(private router: Router) {
  }

  cubaApp: CubaApp;
  logged = false;

  login(appUrl: string, login: string, password: string): void {
    this.cubaApp = new CubaApp('', appUrl);
    this.cubaApp.login(login, password)
      .then((user) => {
        this.logged = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      })
      .catch(() => {
        alert('Login error');
      });
  }

  logout(): void {
    this.cubaApp.logout()
      .then(() => {
        location.reload();
        localStorage.removeItem('currentUser');
        this.logged = false;
        this.router.navigate(['/']);
      })
      .catch(() => {
        alert('Log out error');
      });
  }

  loadSources(name: string): Promise<any[]> {
    return this.cubaApp.loadEntities(name);
  }
}
