import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { GenerateQuizComponent } from './generate-quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GenerateQuizComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class GenerateQuizModule { }
