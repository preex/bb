import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyListService } from './company-list.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  HEROES: Company[] = [
    { company_id: '11', company_name: 'Mr. Nice', address: '1' },
    { company_id: '12', company_name: 'Narco' , address: '1'},
    { company_id: '13', company_name: 'Bombasto', address: '1' }
  ];

  companyList: Company[];
  
  ngOnInit() {
    this.getCompanyList();
  }

  constructor(private companyService: CompanyListService) { }

  getCompanyList(): void {
    this.companyService.getCompanyList().subscribe(companyList => this.companyList = companyList);
  }
}
