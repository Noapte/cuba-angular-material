import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material-module';

import {CubaRestService} from './api/cuba-rest.service';

import {AppComponent} from './app.component';
import {ProductModule} from './products/product.module';
import {UsersListComponent} from './users/UsersList.component';
import {LogOutComponent} from './log-out/logOut.component';
import {LogInComponent} from './log-in/logIn.component';
import {MenuComponent} from './menu/menu.component';
import {routes} from './consts/routes';

@NgModule({
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
  providers: [CubaRestService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
