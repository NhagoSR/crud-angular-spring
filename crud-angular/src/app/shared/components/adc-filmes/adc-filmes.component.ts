import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adc-filmes',
  templateUrl: './adc-filmes.component.html',
  styleUrls: ['./adc-filmes.component.scss']
})
export class AdcFilmesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirSwalAdicionarFilme(){
    Swal.fire({
      title: 'Você quer salvar o filme?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
      confirmButtonColor: '$mat-teal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Salvo!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('O filme não foi salvo', '', 'info')
      }
    })
  }

}
