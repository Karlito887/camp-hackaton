import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resuts',
  templateUrl: './resuts.component.html',
  styleUrls: ['./resuts.component.scss']
})
export class ResutsComponent implements OnInit {
  count: any;
  category: any;
  difficalcy: any;

  constructor() { }

  ngOnInit(): void {
    this.count = localStorage.getItem('count')
    this.category = localStorage.getItem('category')
    this.difficalcy = localStorage.getItem('difficulty')
  }

}
