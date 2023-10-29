import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { IListHistory } from "../model/IListHistory";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ListConversionService } from "./list-conversion.service";


@Component({
    selector: 'app-list-conversion',
    templateUrl: './list-conversion.component.html',
    styleUrls: ['./list-conversion.component.css']
})

export class ListConversionComponent implements OnInit {

    displayedColumns: string[] = [
        'data',
        'hora',
        'moedaOrigem',
        'moedaDestino',
        'valorEntrada',
        'valorSaida',
        'taxaConversao',
        'acoes',
    ];

    history: MatTableDataSource<IListHistory> = new MatTableDataSource<IListHistory>([]);
    pageSize: number = 10;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private listConversionService: ListConversionService) {
        this.history = new MatTableDataSource<IListHistory>([]);
    }

    ngOnInit(): void {
        const historyData = JSON.parse(localStorage.getItem('history') || '[]');
        historyData.reverse();
        this.history.data = historyData;
        this.history.paginator = this.paginator;
        this.history.sort = this.sort;
    }

    excluirHistorico(conversao: IListHistory) {
        this.listConversionService.excluirHistorico(conversao);
        this.history = new MatTableDataSource<IListHistory>(this.listConversionService.obterHistoricoCompleto());
        this.history.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.history.filter = filterValue.trim().toLowerCase();
    }

}