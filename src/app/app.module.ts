import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FavoriteQuizzesModule } from './modules/favorite-quizzes/favorite-quizzes.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { GenerateQuizModule } from './modules/generate-quiz/generate-quiz.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FavoriteQuizzesModule,
    QuizModule,
    GenerateQuizModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
