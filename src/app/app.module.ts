import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SfeComponent } from './sfe.component';

import { MaterialModule } from './material.module';

// shared
import { NavbarModule } from './shared/navbar/navbar.module';

// pages
import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule } from '@angular/router';
import { SFE_ROUTES } from './routes';

import { CompanyService } from './service/company/company.service';

import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './pages/emp/emp.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { CompanyRegComponent } from './pages/company-reg/company-reg.component';


@NgModule({
  declarations: [
    HomeComponent,
    SfeComponent,
    CompanyComponent,
    ContactComponent,
    EmpComponent,
    CompanyListComponent,
    ContactListComponent,
    CompanyRegComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    RouterModule.forRoot(SFE_ROUTES),
    MaterialModule,
    HttpClientModule
  ],
  providers: [CompanyService],
  bootstrap: [SfeComponent]
})
export class AppModule { }
