import { AuthGuardService } from './filmes/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'*', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes/filmes.module').then(m => m.FilmesModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'estudios',
    loadChildren: () => import('./filmes/estudios/estudios.module').then(m => m.EstudiosModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'categorias',
    loadChildren: () => import('./filmes/categorias/categorias.module').then(m => m.CategoriasModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'home',
    loadChildren: () => import('./filmes/home-user/home-user.module').then(m => m.HomeUserModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./filmes/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'logout',
    loadChildren: () => import('./filmes/logout/logout.module').then(m => m.LogoutModule),
  },

  {
    path: 'register',
    loadChildren: () => import('./filmes/register/register.module').then(m => m.RegisterModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
