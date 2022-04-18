import { Observable } from 'rxjs';
import { FilmesService } from './../services/filmes.service';
import { Usuarios } from './../model/usuarios';
import { Router } from '@angular/router';
import { RequestLogin } from './../model/requestLogin';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usuairio$: Observable<Usuarios[]>;
  usuariosPost$: any;
  usuarioIdade: number;

  constructor( private filmesService: FilmesService,
               private router: Router) {}

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */  }

  onSubmitLoginForm(data:any){

    Swal.fire({
      title: 'Você quer salvar o filme?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
      cancelButtonText: `Cancelar`,
      confirmButtonColor: '$mat-teal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuariosPost$ = this.filmesService.postUsuario(data)
        this.router.navigate(['/filmes'])
        console.warn(data)

        Swal.fire('Salvo!', '', 'success');

      } else if (result.isDenied) {
        Swal.fire('O usuario não foi registrado', '', 'info');
      }
    })
  }
  }
