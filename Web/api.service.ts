import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import environment from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}
  serverURL = "http://localhost:3000";

  getToken()
  {
    return localStorage.getItem(environment.tokenName);
  }

  tokenHeader()
  {
    const headers = new HttpHeaders({"Authorization": `Bearer ${this.getToken()}`});
    return {headers};
  }

  registration(table: string, user: object)
  {
    return this.http.post(`${this.serverURL}/${table}/registration`, user);
  }

  login(table: string, user: object)
  {
    return this.http.post(`${this.serverURL}/${table}/login`, user);
  }
}
