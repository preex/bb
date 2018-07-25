import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HiraResponse } from './hira-response';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HiraService {

  constructor(private http: HttpClient) { }

  getHospitalList(sidoCd:string, sgguCd:string, yadmNm:string): Observable<HiraResponse> {
    let url = 'http://localhost:9980/sfe_rest/hira/hospital?';
    url = url + 'sidoCd=' + sidoCd;
    url = url + '&sgguCd=' + sgguCd;
    url = url + '&yadmNm=' + yadmNm;

    return this.http.get<HiraResponse>(url);
  }
}
