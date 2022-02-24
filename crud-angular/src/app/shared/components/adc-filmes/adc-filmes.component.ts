import { Estudios } from './../../../filmes/model/estudios';
import { Categorias } from './../../../filmes/model/categorias';
import { Filmes } from './../../../filmes/model/filmes';
import { FilmesService } from './../../../filmes/services/filmes.service';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private filmesService: FilmesService,
    public dialog: MatDialog
    ) {

      this.filmes$ = this.filmesService.list().
      pipe(
      tap(filmes$ => console.log(filmes$))
    );

      this.filmeCategorias$ = this.filmesService.listCategoria().
      pipe(
      tap(filmeCategorias$ => console.log(filmeCategorias$))
    );

      this.filmeEstudios$ = this.filmesService.listEstudio().
      pipe(
      tap(filmeEstudios$ => console.log(filmeEstudios$))
    );

  }

  ngOnInit(): void {

  }

  public closeAllDialogs(){
    console.log(this.dialog);
    this.dialog.closeAll();
  }

  onSubmitFilmeAddForm(data:any){
    this.filmeCategorias$ = this.filmesService.listCategoria(),
    this.filmeEstudios$ = this.filmesService.listEstudio()
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
        this.filmesPost$ = this.filmesService.postFilme(data)

        console.warn(data)

        Swal.fire('Salvo!', '', 'success');
        this.closeAllDialogs()



      } else if (result.isDenied) {
        Swal.fire('O filme não foi salvo', '', 'info')
      }
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }



}
