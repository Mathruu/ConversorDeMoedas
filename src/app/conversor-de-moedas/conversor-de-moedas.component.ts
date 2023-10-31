import { Component } from '@angular/core';
import { ListConversionService } from '../list-conversion/list-conversion.service';
import { MainService } from '../main/main.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-conversor-de-moedas',
  templateUrl: './conversor-de-moedas.component.html',
  styleUrls: ['./conversor-de-moedas.component.css']
})
export class ConversorDeMoedasComponent {
  moedas: any[] = []; // Deve ser um array de objetos com propriedades 'name' e 'symbol'
  moedaOrigem: string = 'selecione';
  moedaDestino: string = '';
  valor: number = 0;
  valorConvertido: number = 0;
  taxaDeConversao: number = 0;
  mostrarResultado: boolean = false;

  constructor(private mainService: MainService, private listConversionService: ListConversionService) {}

  converterMoeda() {
    if (this.moedaOrigem && this.moedaOrigem !== 'selecione' && this.moedaDestino && this.valor) {
      this.mainService.getExchangeRate(this.moedaOrigem, this.moedaDestino, this.valor).subscribe(
        (response: any) => {
          if (response.result === 'success' && response.conversion_rate) {
            this.valorConvertido = response.conversion_result;
            this.taxaDeConversao = response.conversion_rate;
            this.mostrarResultado = true;

            const id = uuidv4();
            const conversao = {
              id: id,
              data: new Date(),
              hora: new Date(),
              moedaOrigem: this.moedaOrigem,
              moedaDestino: this.moedaDestino,
              valorEntrada: this.valor,
              valorSaida: this.valorConvertido,
              taxaConversao: this.taxaDeConversao
            };
            this.listConversionService.adicionarConversao(conversao);
            const conversaoString = JSON.stringify(conversao);
            localStorage.setItem('conversao-1', conversaoString);
          }
        },
        (error: any) => {
          console.error('Erro na conversão de moeda:', error);
        }
      );
    } else {
      console.error('Por favor, preencha todos os campos antes de converter.');
      const mensagemDeErro = 'Por favor, preencha todos os campos antes de converter.';
      window.alert(mensagemDeErro);
    }
  }

  ngOnInit() {
    this.mainService.getCurrenciesNames().subscribe(
      (response: any) => {
        if (response.result === 'success' && response.supported_codes) {
          this.moedas = response.supported_codes.map((currency: any) => {
            return {
              name: currency[1],
              symbol: currency[0]
            };
          });
        }
      },
      (error: any) => {
        console.error('Erro ao obter a lista de moedas:', error);
      }
    );
  }

  realizarNovaConversao() {
    this.moedaOrigem = 'selecione';
    this.moedaDestino = '';
    this.valor = 0;
    this.valorConvertido = 0;
    this.taxaDeConversao = 0;
    this.mostrarResultado = false;
  }



}
