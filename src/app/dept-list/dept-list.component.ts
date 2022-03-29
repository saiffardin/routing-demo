import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li
        *ngFor="let dept of departments"
        (click)="onSelect(dept)"
        [class.selected]="isSelected(dept)"
      >
        <span class="badge">{{ dept.id }}</span> {{ dept.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DeptListComponent implements OnInit {
  public selectedId: any;
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(dept: any) {
    // this.router.navigate(['/departments', dept.id]);
    this.router.navigate([dept.id], { relativeTo: this.route });
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
