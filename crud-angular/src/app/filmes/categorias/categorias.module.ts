import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoriasComponent } from '../categorias/categorias.component';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CategoriasRoutingModule,
    SharedModule
  ]
})
export class CategoriasModule { }
