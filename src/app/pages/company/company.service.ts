import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  HEROES: Company[] = [
    { company_id: '11', company_name: 'Mr. Nice', address: '1' },
    { company_id: '12', company_name: 'Narco' , address: '1'},
    { company_id: '13', company_name: 'Bombasto', address: '1' }
  ];

  constructor(private http: HttpClient) { }
//
  getCompanyList() : Observable<any>{ 
    let url = "http://localhost:9980/test2/emp";

    return this.http.get(url);
    //return of(this.HEROES);
  }

  // insertCompany() : Observable<any> {
  //   let url = "http://localhost:9980/test2/emp";

    
  //   return this.http.post(url);
  // }
}
