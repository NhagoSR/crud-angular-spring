import { AdcFilmesComponent } from '../../shared/components/adc-filmes/adc-filmes.component';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, matDialogAnimations } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { UpdFilmesComponent } from 'src/app/shared/components/upd-filmes/upd-filmes.component';

import { Filmes } from '../model/filmes';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filmes$: Observable<Filmes[]>;
  displayedColumns = ['_id','titulo','sinopse','dataLancamento','nomeDiretor','categoria','estudio','acoes'];


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

  onOpenAdcFilmes(){
    this.dialog.open(AdcFilmesComponent);
  }

  onOpenUpdFilmes(){
    this.dialog.open(UpdFilmesComponent);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
