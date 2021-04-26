import { QuizComponent } from './modules/quiz/quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateQuizComponent } from './modules/generate-quiz/generate-quiz.component';
import { FavoriteQuizzesComponent } from './modules/favorite-quizzes/favorite-quizzes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'generate-quiz'
  },
  {
    path: 'generate-quiz',
    component: GenerateQuizComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'favorite-quizzes',
    component: FavoriteQuizzesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
