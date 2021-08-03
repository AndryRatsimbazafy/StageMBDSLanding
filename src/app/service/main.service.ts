import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {
  }


  contact( body: any) {
    return this.http.post<any>(`${environment.SERVER_URL}${'/api/auth/contactUs'}`, body);
  }

  join(body: any) {
      return this.http.post<any>(`${environment.SERVER_URL}${'/api/auth/register'}`, body);
  }

  getCoachings() {
    return this.http.get<any>(`${environment.SERVER_URL}${'/api/users/coachings'}`)
  }

}
