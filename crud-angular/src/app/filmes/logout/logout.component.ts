import Swal from "sweetalert2";
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'animate.css';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }


  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.authService.clear();
      this.router.navigate(['home']);

      Swal.fire({
        icon: 'success',
        title: 'Você foi deslogado',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.router.navigate(['home']);
    }

  }

}
