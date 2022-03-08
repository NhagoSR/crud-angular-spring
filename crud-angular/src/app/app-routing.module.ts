import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'filmes' },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes/filmes.module').then(m => m.FilmesModule)
  },

  {
    path: 'estudios',
    loadChildren: () => import('./filmes/estudios/estudios.module').then(m => m.EstudiosModule)
  },

  {
    path: 'categorias',
    loadChildren: () => import('./filmes/categorias/categorias.module').then(m => m.CategoriasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
