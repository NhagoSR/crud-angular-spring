import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    AppMaterialModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
