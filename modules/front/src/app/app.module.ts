import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MatButtonModule, MatFormFieldModule} from '@angular/material';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {CubaRestService} from './api/cuba-rest.service';
import {DeviceDetectorModule} from 'ngx-device-detector';

import {ProductModule} from './products/product.module';
import {UsersListComponent} from './users/UsersList.component';
import {LogOutComponent} from './log-out/logOut.component';
import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatTableModule, MatPaginatorModule,
    DemoMaterialModule,
    MatProgressSpinnerModule, MatSortModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersListComponent },
      { path: 'log-out', component: LogOutComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
    ProductModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [CubaRestService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
