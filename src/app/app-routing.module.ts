import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptContactComponent } from './dept-contact/dept-contact.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DeptListComponent },
  {
    path: 'departments/:id',
    component: DeptDetailComponent,
    children: [
      { path: 'overview', component: DeptOverviewComponent },
      { path: 'contact', component: DeptContactComponent },
    ],
  },
  { path: 'employees', component: EmpListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DeptListComponent,
  DeptDetailComponent,
  EmpListComponent,
  PageNotFoundComponent,
  DeptOverviewComponent,
  DeptContactComponent,
];
