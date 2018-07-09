import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from './company';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  HEROES: Company[] = [
    { company_id: '11', company_name: '경북대학교병원', addr: '대구광역시 중구 동덕로 130 (삼덕동2가, 경북대학교병원)', clCd:'01',clCdNm:'상급종합', gdrCnt:6,intnCnt:77 ,resdntCnt:212,sdrCnt:227  },
    { company_id: '12', company_name: '강북삼성병원' , addr: '서울특별시 종로구 새문안로 29 (평동)', clCd:'01', clCdNm:'상급종합', gdrCnt:6,intnCnt:77 ,resdntCnt:212,sdrCnt:227},
    { company_id: '13', company_name: '건국대학교병원', addr: '서울특별시 광진구 능동로 120-1 (화양동)', clCd:'01', clCdNm:'상급종합', gdrCnt:6,intnCnt:77 ,resdntCnt:212,sdrCnt:227},
    { company_id: '14', company_name: '아주대학교병원', addr: '경기도 수원시 영통구 월드컵로 164 (원천동)', clCd:'01', clCdNm:'상급종합', gdrCnt:6,intnCnt:77 ,resdntCnt:212,sdrCnt:227},
    { company_id: '15', company_name: '전남대학교병원', addr: '광주광역시 동구 제봉로 42  (학동)', clCd:'01', clCdNm:'상급종합', gdrCnt:6,intnCnt:77 ,resdntCnt:212,sdrCnt:227}
  ];


  getCompanyList() : Observable<Company[]>{ 
    let url = "http://localhost:9980/test2/emp";

    //return this.http.get(url);
    return of(this.HEROES);
  }

  getCompany(id) : Observable<Company> {
    return of( this.HEROES.filter(i => i.company_id == id)[0]);
  }


}
