import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ResutsComponent } from './resuts/resuts.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizzes$!: Observable<any>

  rightAnswers: number = 0;

  constructor(private route: ActivatedRoute,
    private httpRequestService: HttpRequestService,
    private matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.setQuizzes();
  }

  setQuizzes(): void {
    this.quizzes$ = this.route.queryParams.pipe(switchMap(res => {
      return this.httpRequestService.getQuizzes(res.questionsCount, res.category, res.difficulty)
        .pipe(map(res => res.results))
    }))
  }

  giveAnswer(quiz: any, answer: string, isLast: boolean) {
    if(quiz.correct_answer === answer) {
      this.rightAnswers ++
    }
    console.log(isLast)

    if(isLast) {
      this.matDialog.open(ResutsComponent);
    }
  }

}
