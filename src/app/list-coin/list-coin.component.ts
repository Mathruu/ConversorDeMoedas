import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../main/main.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { IListCurrencies } from '../model/IListCurrencies';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {

  displayedColumns: string[] = ['symbol','name'];
  dataSource: MatTableDataSource<IListCurrencies> = new MatTableDataSource<IListCurrencies>([]);
  pageSize: number = 10;

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(private mainService: MainService) {
    this.dataSource = new MatTableDataSource<IListCurrencies>([]);
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    
    this.mainService.getCurrenciesNames().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const currenciesArray: IListCurrencies[] = response.supported_codes.map((currency: any) => {
            return {
              symbol: currency[0],
              name: currency[1]
            };
          });
          this.dataSource.data = currenciesArray;
        }
      },
      (error) => {
        console.error('Erro na solicitação:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
