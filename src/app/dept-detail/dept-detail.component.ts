import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>You selected department with id = {{ deptID }}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [],
})
export class DeptDetailComponent implements OnInit {
  public deptID: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // console.log('deptID:', typeof this.deptID);

    this.route.paramMap.subscribe((params: ParamMap) => {
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

  gotoDepartments() {
    let selectedId = this.deptID ? this.deptID : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
