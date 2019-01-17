import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material-module';

import {CubaRestService} from './api/cuba-rest.service';

import {ProductModule} from './products/product.module';
import {UsersListComponent} from './users/UsersList.component';
import {LogOutComponent} from './log-out/logOut.component';
import {LogInComponent} from './log-in/logIn.component';
import {MenuComponent} from './menu/menu.component';
import {routes} from './consts/routes';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsersListComponent,
        LogOutComponent,
        LogInComponent,
        MenuComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot(routes),
        ProductModule
      ],
      providers: [CubaRestService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`initially isLogged should return false`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isLogged()).toBeFalsy();
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to cuba-ng-material!');
  // }));
});
