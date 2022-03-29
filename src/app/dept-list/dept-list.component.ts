import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li *ngFor="let dept of departments" (click) ="onSelect(dept)" >
        <span class="badge">{{ dept.id }}</span> {{ dept.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DeptListComponent implements OnInit {
//   public selectedId;
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  constructor(private router:Router) {}

  ngOnInit(): void {}

  onSelect(dept:any) {
    this.router.navigate(['/departments',dept.id])
  }
}
