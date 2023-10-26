import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorDeMoedasComponent } from './conversor-de-moedas/conversor-de-moedas.component';
import { ListCoinComponent } from './list-coin/list-coin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',component: MainComponent },
  {path: 'main',component: MainComponent },
  {path: 'list-coin', component: ListCoinComponent},
  {path: 'conversor-de-moedas', component: ConversorDeMoedasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
