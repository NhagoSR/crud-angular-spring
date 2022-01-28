import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';

const routes: Routes = [
  { path: '', component: FilmesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
