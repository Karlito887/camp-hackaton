import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResutsComponent } from './resuts/resuts.component';



@NgModule({
  declarations: [QuizComponent, ResutsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
