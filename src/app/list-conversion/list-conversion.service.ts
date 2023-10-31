import { Injectable } from '@angular/core';
import { IListHistory } from '../model/IListHistory';

@Injectable({
  providedIn: 'root'
})
export class ListConversionService {

  private history: IListHistory[] = [];

  constructor() { 
    const historyData = JSON.parse(localStorage.getItem('history') || '[]');
    this.history = historyData;
  }

  adicionarConversao(conversao: IListHistory) {
    this.history.push(conversao);
    localStorage.setItem('history', JSON.stringify(this.history));
    console.log(conversao)
  }

  obterHistoricoCompleto(): IListHistory[] {
    return this.history;
  }

  excluirHistorico(conversao: IListHistory) {
    const index = this.history.indexOf(conversao);
    if (index !== -1) {
      this.history.splice(index, 1);
      this.atualizarHistorico();
    }
  }

  private atualizarHistorico() {
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  // private obterHistorico(): IListHistory[] {
  //   const historyData = JSON.parse(localStorage.getItem('history') || '[]');
  //   return historyData;
  // }


}
