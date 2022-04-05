import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseLogin } from '../model/responseLogin';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../model/requestLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = 'api/auth';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  //METODOS PARA LOGIN
  doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      this.API,
      requestLogin
      ).pipe(
        tap((loginResponse) => (this.authService.loginResponse = loginResponse))
      );
  }
}
