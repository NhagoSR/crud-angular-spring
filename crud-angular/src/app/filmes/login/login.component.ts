import { Router } from '@angular/router';
import { MySwalService } from './../services/my-swal.service';
import { LoginService } from 'src/app/filmes/services/login.service';
import { RequestLogin } from './../model/requestLogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin;

  constructor( private loginService: LoginService,
               private mySwalService: MySwalService,
               private router: Router) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  onSubmitLoginForm(): void{
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['/filmes'])
        console.log(data);
      },
      (error) => {
        this.mySwalService.error(error.error, "Login Não Efetuado")
        console.error(error.error);
      }
    )
  }
}
