import { ResponseLogin } from './../model/responseLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: ResponseLogin;

  public clear(): void{
    this.loginResponse.token = "";
    this.loginResponse.tipo = "";
  }

  public isAuthenticated():boolean{
    return Boolean(this.loginResponse?.token);
  }




}
