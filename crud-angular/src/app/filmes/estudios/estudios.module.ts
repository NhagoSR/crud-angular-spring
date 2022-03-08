import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EstudiosRoutingModule } from './estudios-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { EstudiosComponent } from './../estudios/estudios.component';


@NgModule({
  declarations: [
    EstudiosComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    EstudiosRoutingModule,
    SharedModule
  ]
})
export class EstudiosModule { }
