import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

import { ProductModule } from './products/product.module';

import {CubaRestService} from "./cuba-rest.service";
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [CubaRestService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
