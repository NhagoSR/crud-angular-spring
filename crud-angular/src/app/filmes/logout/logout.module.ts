import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { SharedModule } from '../../shared/shared.module';
import { LogoutRoutingModule } from './logout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LogoutRoutingModule,
    AppMaterialModule
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
