import { ResponseLogin } from './../model/responseLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: ResponseLogin;

  public clear(): void{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('tipo')
  }

  public isAuthenticated():boolean{
    let token = (sessionStorage.getItem('token'),sessionStorage.getItem('tipo'))
    return !(token === null)
  }

}
