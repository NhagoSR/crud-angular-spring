import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user.component';
import { SharedModule } from './../../shared/shared.module';
import { HomeUserRoutingModule } from './home-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeUserRoutingModule,
    AppMaterialModule
  ],
  declarations: [HomeUserComponent]
})
export class HomeUserModule { }
