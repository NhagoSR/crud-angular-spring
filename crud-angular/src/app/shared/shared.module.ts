import { HomeUserComponent } from './../filmes/home-user/home-user.component';
import { AdcEstudiosComponent } from 'src/app/shared/components/adc-estudios/adc-estudios.component';
import { AdcCategoriasComponent } from 'src/app/shared/components/adc-categorias/adc-categorias.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { AdcFilmesComponent } from './components/adc-filmes/adc-filmes.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { UpdEstudiosComponent } from './components/upd-estudios/upd-estudios.component';
import { UpdFilmesComponent } from './components/upd-filmes/upd-filmes.component';
import { UpdCategoriasComponent } from './components/upd-categorias/upd-categorias.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    AdcFilmesComponent,
    AdcCategoriasComponent,
    AdcEstudiosComponent,
    UpdFilmesComponent,
    UpdEstudiosComponent,
    UpdCategoriasComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent]
})


export class SharedModule { }
