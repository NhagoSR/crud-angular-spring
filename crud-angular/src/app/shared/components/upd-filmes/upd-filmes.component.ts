import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upd-filmes',
  templateUrl: './upd-filmes.component.html',
  styleUrls: ['./upd-filmes.component.scss']
})
export class UpdFilmesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirSwalAlterarFilme(){
    Swal.fire({
      title: 'Você quer salvar as alterações?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar alterações',
      denyButtonText: `Não salvar alterações`,
      confirmButtonColor: '$mat-teal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Alterações SalvA!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('As alterações não foram salvas', '', 'info')
      }
    })
  }
}
