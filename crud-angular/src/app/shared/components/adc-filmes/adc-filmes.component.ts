import { Estudios } from './../../../filmes/model/estudios';
import { Categorias } from './../../../filmes/model/categorias';
import { Filmes } from './../../../filmes/model/filmes';
import { FilmesService } from './../../../filmes/services/filmes.service';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adc-filmes',
  templateUrl: './adc-filmes.component.html',
  styleUrls: ['./adc-filmes.component.scss']
})
export class AdcFilmesComponent implements OnInit {



  filmes$: Observable<Filmes[]>;
  filmeCategorias$: Observable<Categorias[]>;
  filmeEstudios$: Observable<Estudios[]>;
  filmesPost$: any;

  constructor(
    private filmes: FilmesService
    ) {

      this.filmes$ = this.filmes.list().
      pipe(
      tap(filmes$ => console.log(filmes$))
    );

      this.filmeCategorias$ = this.filmes.listCategoria().
      pipe(
      tap(filmeCategorias$ => console.log(filmeCategorias$))
    );

      this.filmeEstudios$ = this.filmes.listEstudio().
      pipe(
      tap(filmeEstudios$ => console.log(filmeEstudios$))
    );

      this.filmeEstudios$ = this.filmes.listEstudio().
      pipe(
      tap(filmeEstudios$ => console.log(filmeEstudios$))
    );

  }

  ngOnInit(): void {

  }

  onSubmitFilmeAddForm(data:any){
    this.filmeCategorias$ = this.filmes.listCategoria(),
    this.filmeEstudios$ = this.filmes.listEstudio()
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
        this.filmesPost$ = this.filmes.postFilme(data)

        console.warn(data)

        Swal.fire('Salvo!', '', 'success').then(function(){
          location.reload();
          }
       );


      } else if (result.isDenied) {
        Swal.fire('O filme não foi salvo', '', 'info')
      }
    })
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
