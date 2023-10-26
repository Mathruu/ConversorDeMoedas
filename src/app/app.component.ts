import { Component, OnInit } from '@angular/core';
import { MainService } from './main/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-api';

  currencies: any;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getCurrenciesNames().subscribe(data => {
      this.currencies = data;
    });
  }
}
