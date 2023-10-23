import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.listarMoedas().subscribe(data => {
      console.log(data);
    });
  }
}
