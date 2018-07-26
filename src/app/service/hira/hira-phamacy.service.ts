import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HiraResponse } from './hira-response';

@Injectable()
export class HiraPhamacyService {
  
  url: string = '';

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<HiraResponse>(this.url);
  }
}
