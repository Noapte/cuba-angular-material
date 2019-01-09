import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";



import {CubaRestService} from "./cuba-rest.service";

import { DeviceDetectorModule } from 'ngx-device-detector';

//modules
import {LoginComponent} from "./login/login.component";
import {HelpComponent} from "./help/help.component";
import { ProductModule } from './products/product.module';
import {ListOfAllRequestsComponent} from "./list-of-all-requests/listOfAllRequests.component";
import {ReportComponent} from "./report/report.component";
import {ScanComponent} from "./scan/scan.component";
import {LogOutComponent} from "./log-out/logOut.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    ListOfAllRequestsComponent,
    ReportComponent,
    ScanComponent,
    LogOutComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'help', component: HelpComponent },
      { path: 'list-of-all-requests', component: ListOfAllRequestsComponent },
      { path: 'scan', component: ScanComponent },
      { path: 'report', component: ReportComponent },
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
