import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './../filmes/filmes.component';


@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class FilmesModule { }
