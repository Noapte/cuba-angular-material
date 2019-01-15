import {CdkTableModule} from '@angular/cdk/table';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ]
})
export class MaterialModule {}
