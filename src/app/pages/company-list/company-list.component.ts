import { Component, OnInit } from '@angular/core';
import { Company } from '../../service/company/company';
import { CompanyService } from '../../service/company/company.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  companyList: Company[];
  
  ngOnInit() {
    this.getCompanyList();
  }

  constructor(private companyService: CompanyService, private router: Router) { }

  getCompanyList(): void {
    this.companyService.getCompanyList().subscribe(companyList => this.companyList = companyList);
  }

  moveDetail(id){
    this.router.navigate(['company', id]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
}
