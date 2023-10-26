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

  // listarMoedas(): Observable<any> {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   return this.http.get("https://v6.exchangerate-api.com/v6/bd895265b130b2825e16c623/latest/USD", options);

}

