import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;
  companyId: any;
  currentDate: string;

  constructor(private httpService: HttpService) {



  }


  postMethod(postData: any): Observable<any> {
    return this.httpService.post('Api', postData);
  }

  getMethod(): Observable<any> {
    return this.httpService.get('Api');
  }

  putMethod(url, body): Observable<any> {
    return this.httpService.put(url, body)
  }

  login(postData: any): Observable<any> {
    return this.httpService.post('api', postData);
  }

}
