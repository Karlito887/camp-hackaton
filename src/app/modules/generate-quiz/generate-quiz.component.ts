import { HttpRequestService } from './../../services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.scss']
})
export class GenerateQuizComponent implements OnInit {
  generateQuizForm!: FormGroup;
  categories$!: Observable<Category[]>;

  constructor(private fb: FormBuilder,
    private httpRequestService: HttpRequestService,
    private router: Router) { }

  ngOnInit(): void {
    this.setCategories();
    this.setGenerateQuizForm();
  }

  setGenerateQuizForm(): void {
    this.generateQuizForm = this.fb.group({
      questionsCount: ['', Validators.required],
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    })
  }

  setCategories() {
    this.categories$ = this.httpRequestService.getCategory();
  }

  generateQuiz() {
    this.router.navigate(['/quiz'], {
      queryParams: this.generateQuizForm.value
    })
  }
}
