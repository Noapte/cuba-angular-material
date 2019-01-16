import {CdkTableModule} from '@angular/cdk/table';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    CdkTableModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    BrowserModule
  ]
})
export class MaterialModule {}
