import { Component, OnInit } from '@angular/core';
import { Company } from '../../service/company/company';
import { CompanyService } from '../../service/company/company.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyId: string;

  company: Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

}
