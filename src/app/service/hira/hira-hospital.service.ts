import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HiraResponse } from './hira-response';
import { HiraRequest } from './hira-request';
import { retry } from 'rxjs/operators';

@Injectable()
export class HiraHospitalService {

  url: string = 'http://localhost:9980/sfe_rest/hira/hospital';

  constructor(private http: HttpClient) { }

  getList(hiraRequest:HiraRequest) {

    let params = new HttpParams();
    Object.keys(hiraRequest).map(key => {
      if(hiraRequest[key] != undefined){
        params = params.set(key, hiraRequest[key])
      }
    });

    return this.http.get<HiraResponse>(this.url, {params});
  }
}
