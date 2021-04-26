import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../shared/models/category';
import { CategoryRequest } from '../shared/models/category-request';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<CategoryRequest>('https://opentdb.com/api_category.php').pipe(map(res => res.trivia_categories));
  }

  getQuizzes(count: number, category: number, difficulty: string): Observable<any> {
    this.storeQuizSettings(count, category, difficulty)
    return this.http.get<CategoryRequest>(`https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${difficulty}&type=boolean`);
  }

  storeQuizSettings(count: number, category: number, difficulty: string): void {
    localStorage.setItem('count', count.toString())
    localStorage.setItem('category', category.toString())
    localStorage.setItem('difficulty', difficulty)
  }
}
