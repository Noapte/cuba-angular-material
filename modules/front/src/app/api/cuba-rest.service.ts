import {Injectable} from '@angular/core';
import {CubaApp, EntityFilter, Condition, OperatorType} from '@cuba-platform/rest/dist-node/cuba';
import {Router} from '@angular/router';
import {errors} from './../consts/errors';

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
        alert(errors.LOG_IN_ERROR);
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
        alert(errors.LOG_OUT_ERROR);
      });
  }

  loadEntities(name: string): Promise<any[]> {
    return this.cubaApp.loadEntities(name);
  }

  loadEntity(name: string, id: any): Promise<any[]> {
    return this.cubaApp.loadEntity(name, id);
  }

  deleteEntity(name: string, id: any): Promise<any[]> {
    return this.cubaApp.deleteEntity(name, id);
  }

  commitEntity(entityName: string, id: any, changes: object): Promise<any[]> {
    const entity = {...changes, id: id};
    return this.cubaApp.commitEntity(entityName, entity);
  }

  searchEntities(entityName: string, propertyName: string, value: string): Promise<any[]> {
    const operationType: OperatorType = 'contains';

    const condition: Condition = {
      property: propertyName,
      operator: operationType,
      value: value
    };
    const filter: EntityFilter = {
      conditions: [condition]
    };
    return this.cubaApp.searchEntities(entityName, filter);

  }


}
