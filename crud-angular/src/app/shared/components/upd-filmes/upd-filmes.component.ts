import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Categorias } from 'src/app/filmes/model/categorias';
import { Estudios } from 'src/app/filmes/model/estudios';
import { Filmes } from 'src/app/filmes/model/filmes';
import { FilmesService } from 'src/app/filmes/services/filmes.service';
import Swal from 'sweetalert2';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-upd-filmes',
  templateUrl: './upd-filmes.component.html',
  styleUrls: ['./upd-filmes.component.scss']
})
export class UpdFilmesComponent implements OnInit {


  filmes$: Observable<Filmes[]>;
  filmesAtual$: any;
  filmeCategorias$: Observable<Categorias[]>;
  filmeEstudios$: Observable<Estudios[]>;
  filmesUpdate$: any;

  constructor(
    private filmesService: FilmesService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public idFilme: number)
    {
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

  onSubmitFilmeUpdForm(data:any){
    console.log("filme", this.idFilme)
    this.filmeCategorias$ = this.filmesService.listCategoria(),
    this.filmeEstudios$ = this.filmesService.listEstudio()
    this.filmesAtual$ = this.filmesService.listCurrent(this.idFilme).subscribe((result)=>
      console.warn(result)
    )

    Swal.fire({
      title: 'Você quer salvar as alterações?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
      cancelButtonText: `Cancelar`,
      confirmButtonColor: '$mat-teal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.filmesUpdate$ = this.filmesService.updateFilme(this.idFilme, data)

        console.warn(this.idFilme)
        console.warn(data)

        Swal.fire('Alterações Salvas!', '', 'success');


      } else if (result.isDenied) {
        Swal.fire('As alterações foram salvas', '', 'info')
      }
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
