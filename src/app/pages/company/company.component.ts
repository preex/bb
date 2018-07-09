import { Component, OnInit } from '@angular/core';

import { Company } from './company';
import { CompanyService } from './company.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyList: Company[];

  constructor(private companyService: CompanyService ) { }

  ngOnInit() {
   // this.getCompanyList();
  }

  
}
