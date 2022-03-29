import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: ` <h3>You selected department with id = {{ deptID }}</h3> `,
  styles: [],
})
export class DeptDetailComponent implements OnInit {
  public deptID: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.deptID = id;
  }
}
