import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Filmes } from '../model/filmes';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filmes$: Observable<Filmes[]>;
  // filmes: Filmes[] = [];
  displayedColumns = ['_id','titulo','sinopse','dataLancamento','nomeDiretor','categoria','estudio'];

  // FilmesService: FilmesService;

  constructor(
    private FilmesService: FilmesService,
    public dialog: MatDialog
  ) {
    // this.filmes = [];
    // this.filmesService = new FilmesService();
    this.filmes$ = this.FilmesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
    // this.FilmesService.list().subscribe(filmes => this.filmes = filmes);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
