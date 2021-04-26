import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteQuizzesComponent } from './favorite-quizzes.component';

describe('FavoriteQuizzesComponent', () => {
  let component: FavoriteQuizzesComponent;
  let fixture: ComponentFixture<FavoriteQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
