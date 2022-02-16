import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { AdcFilmesComponent } from './components/adc-filmes/adc-filmes.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { UpdFilmesComponent } from './components/upd-filmes/upd-filmes.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    AdcFilmesComponent,
    UpdFilmesComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
