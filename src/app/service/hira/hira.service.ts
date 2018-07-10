import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HiraService {



  constructor(private http: HttpClient) { }

  getHiraList() {
    let url = 'http://apis.data.go.kr/B551182/hospInfoService/getHospBasisList?ServiceKey=mzoDDWfbSOFy5RpaVBm4fSUH9GDW0Dk9K5NCGxCybHjLK9f09JYTLwkeMDdce68Ao94nZm61zG5%2BbvObyPbz7Q%3D%3D';


    url='numOfRows=100&pageNo=1'
  }

  getHiraDetail() {
    
  }

}
