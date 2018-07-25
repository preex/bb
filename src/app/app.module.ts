import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SfeComponent } from './sfe.component';

import { MaterialModule } from './material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FlexLayoutModule  } from '@angular/flex-layout';

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
import { HiraPopupComponent } from './pages/popup/hira-popup/hira-popup.component';
import { HiraHospitalService } from './service/hira/hira-hospital.service';



@NgModule({
  declarations: [
    HomeComponent,
    SfeComponent,
    CompanyComponent,
    ContactComponent,
    EmpComponent,
    CompanyListComponent,
    ContactListComponent,
    CompanyRegComponent,
    HiraPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    RouterModule.forRoot(SFE_ROUTES),
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [CompanyService, HiraHospitalService],
  bootstrap: [SfeComponent],
  entryComponents: [
    HiraPopupComponent
  ]
})
export class AppModule { }


//Place components which are created dynamically to entryComponents under @NgModule decorator function.