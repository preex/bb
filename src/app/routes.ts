import { EmpComponent } from './pages/emp/emp.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Routes } from '@angular/router';

export const SFE_ROUTES: Routes = [
 
  {path: 'home', component: HomeComponent, data: {}},
  {path: 'contact', component: ContactComponent, data: {}},
  {path: 'company', component: CompanyListComponent, data: {}},
  {path: 'company/:id', component: CompanyComponent, data: {}},

  {path: 'emp', component: EmpComponent, data: {}},
  {path: '',  redirectTo: '/home', pathMatch: 'full', data: {}},
  // Since https://github.com/angular/material2/pull/9574, the cdk-table guide became the overview
  // document for the cdk table. To avoid any dead / broken links, we redirect to the new location.
  {path: '**', redirectTo: ''}
];
