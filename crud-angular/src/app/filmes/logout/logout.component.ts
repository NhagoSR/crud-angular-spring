import Swal from "sweetalert2";
import { MySwalService } from './../services/my-swal.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private mySwalService: MySwalService) { }


  ngOnInit() {
    this.authService.clear();
    this.router.navigate(['home']);

    Swal.fire({
      icon: 'success',
      title: 'Você foi deslogado',
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
