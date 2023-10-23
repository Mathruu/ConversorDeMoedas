import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoinComponent } from './list-coin/list-coin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',component: MainComponent },
  {path: 'main',component: MainComponent },
  {path: 'list-coin', component: ListCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
