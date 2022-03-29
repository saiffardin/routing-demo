import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>You selected department with id = {{ deptID }}</h3>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
  `,
  styles: [],
})
export class DeptDetailComponent implements OnInit {
  public deptID: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // console.log('deptID:', typeof this.deptID);

    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.deptID = id;
    });
  }

  goPrevious() {
    let previousId = this.deptID - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.deptID + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
