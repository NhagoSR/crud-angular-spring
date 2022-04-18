import { Estudios } from 'src/app/filmes/model/estudios';
import { FilmesService } from 'src/app/filmes/services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, debounceTime, distinctUntilChanged, filter, merge, Observable, of, switchMap } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Filmes } from '../model/filmes';
import { Categorias } from '../model/categorias';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
    campoSearch = new FormControl();
    campoSelectCategoria = new FormControl();
    campoSelectEstudio = new FormControl();
    selectCategoria: string;
    selectEstudio: string;

    filmes$: Observable<Filmes[]>;
    categoria$: Observable<Categorias[]>;
    estudio$: Observable<Estudios[]>;
    displayedColumns = ['id', 'nome', 'data_lancamento', 'diretor', 'duracao', 'sinopse', 'estudio', 'categoria'];

    constructor(
      private filmesService: FilmesService,
      public dialog: MatDialog
      ) {
        this.categoria$ = this.filmesService.listCategoria();

        this.estudio$ = this.filmesService.listEstudio();

        this.filmes$ = this.filmesService.list()
        .pipe(
          catchError(_error => {
            this.onError('Erro ao carregar filmes.');
           return of([])
          })
        );

      }

    todosfilmes$ = this.filmesService.list();

    filtro$ = this.campoSearch.valueChanges.pipe(
      debounceTime(500),
      filter(
        (valorDigitado) => valorDigitado.length >= 1 || !valorDigitado.length
      ),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.filmesService.getfiltroPorNomeCategoriaEstudio(valorDigitado, this.campoSelectCategoria.value, this.campoSelectEstudio.value))
    );

    filtroCategoria$ = this.campoSelectCategoria.valueChanges.pipe(
      switchMap(() => this.filmesService.getfiltroPorCategoriaEstudio(this.campoSelectCategoria.value, this.campoSelectEstudio.value))
    );

    filtroEstudio$ = this.campoSelectEstudio.valueChanges.pipe(
      switchMap(() => this.filmesService.getfiltroPorCategoriaEstudio(this.campoSelectCategoria.value, this.campoSelectEstudio.value))
    );

    filme$ = merge(this.todosfilmes$, this.filtro$, this.filtroCategoria$, this.filtroEstudio$);


    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }
    /*
    openDialog(filme: Filmes) {
      this.dialog.open(DetalhesDialogComponent, {
        data: {
          filme: filme
        }
      });
    }
    */
    public labels: any = {
      previousLabel: 'Voltar',
      nextLabel: 'Próximo'
    };

    p : number = 1;
    pageChanged(_event: any){console.log("pageChanged")}

    ngOnInit(): void{

    }

  }



