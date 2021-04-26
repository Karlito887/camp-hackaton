import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

const matComponents = [
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatRadioModule,
]

@NgModule({
  imports: [matComponents],
  exports: [matComponents]
})
export class AngularMaterialModule { }
