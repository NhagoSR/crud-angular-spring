import { Filmes } from './../model/filmes';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, empty, Observable, of } from 'rxjs';
import { UpdFilmesComponent } from 'src/app/shared/components/upd-filmes/upd-filmes.component';
import { AdcFilmesComponent } from '../../shared/components/adc-filmes/adc-filmes.component';
import { FilmesService } from '../services/filmes.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import { Categorias } from './../model/categorias';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filmes$: Observable<Filmes[]>;
  displayedColumns = ['_id','titulo','sinopse','dataLancamento','nomeDiretor','categoria','estudio','acoes'];

  filmeSelecionado!: Filmes["_id"];


  constructor(
    private FilmesService: FilmesService,
    public dialog: MatDialog
  ) {
    this.filmes$ = this.FilmesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  onRefresh(){
    this.filmes$ = this.FilmesService.list().pipe(
      catchError(error =>{
        console.error(error);
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    )
  }

  onOpenAdcFilmes(){
    this.dialog.open(AdcFilmesComponent).afterClosed().subscribe(
      success => this.onRefresh(),
      error => this.onError(error)
    )
  }


  onOpenUpdFilmes(_id:number){
    this.dialog.open(UpdFilmesComponent, {
      data: _id
    }).afterClosed().subscribe(
      success => this.onRefresh(),
      error => this.onError(error)
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onDltFilmes(_id: any){
    console.log("filme", _id)
    this.filmeSelecionado = _id;
    console.log("filmeselecionado", this.filmeSelecionado)

    Swal.fire({
      title: 'Tem certeza disso?',
      text: "Essa mudança não pode ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.FilmesService.deleteFilme(this.filmeSelecionado)
        .subscribe(
          success => this.onRefresh(),
          error => this.onError(error)
        );

        Swal.fire(
          'Deletado!',
          'O filme foi deletado',
          'success'
        )
      }
    })
  }

  ngOnInit(): void {

  }

}
