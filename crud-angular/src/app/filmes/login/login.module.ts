import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from './../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    AppMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }