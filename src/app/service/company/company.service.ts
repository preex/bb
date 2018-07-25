import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from './company';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:9980/sfe_rest/company";


  /**
   * 다건조회
   */
  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  /**
   * 단건조회
   * @param id 
   */
  getCompany(id): Observable<Company> {
    let params = new HttpParams().set('id', id);

    return this.http.get<Company>(this.url, {params});
  }

  /**
   * 거래처 추가
   */
  /** POST: add a new hero to the database */
  addCompany (company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company, httpOptions);
  }

}
