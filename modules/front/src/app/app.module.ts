import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {CubaRestService} from './api/cuba-rest.service';

import {ProductModule} from './products/product.module';
import {UsersListComponent} from './users/UsersList.component';
import {LogOutComponent} from './log-out/logOut.component';
import {LogInComponent} from './log-in/logIn.component';
import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LogOutComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersListComponent },
      { path: 'log-out', component: LogOutComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [CubaRestService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
