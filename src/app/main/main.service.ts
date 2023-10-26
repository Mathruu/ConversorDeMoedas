import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiURL = 'https://v6.exchangerate-api.com/v6/';
  private apiKey = 'bd895265b130b2825e16c623'; 

  constructor(private http: HttpClient) { }

  getCurrenciesNames(): Observable<any> {
    return this.http.get(`${this.apiURL}${this.apiKey}/codes`);
  }

  getExchangeRate(base: string, target: string, amount?: number): Observable<any> {
    let url = `${this.apiURL}${this.apiKey}/pair/${base}/${target}`;
    if (amount) {
      url += `/${amount}`;
    }
    return this.http.get(url);
  }
  
}

