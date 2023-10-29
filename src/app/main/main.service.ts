import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiURL = 'https://v6.exchangerate-api.com/v6/';
  private apiKey = '10c789817ba4a2bc473fc29a'; 

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

