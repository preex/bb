import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HiraResponse } from './hira-response';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HiraService {

  constructor(private http: HttpClient) { }

  getHiraList(sidoCd:string, sgguCd:string, yadmNm:string): Observable<HiraResponse> {
    let url = 'http://apis.data.go.kr/B551182/hospInfoService/getHospBasisList?ServiceKey=mzoDDWfbSOFy5RpaVBm4fSUH9GDW0Dk9K5NCGxCybHjLK9f09JYTLwkeMDdce68Ao94nZm61zG5%2BbvObyPbz7Q%3D%3D';
    url = url + '&sidoCd=' + sidoCd;
    url = url + '&sgguCd=' + sgguCd;
    url = url + '&numOfRows=100&pageNo=1';

    console.log(url);


    // .pipe(
    //   catchError(this.handleError('getHiraList', []))
    // );
    return this.http.get<HiraResponse>(url);
  }

  getHiraDetail() {
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
