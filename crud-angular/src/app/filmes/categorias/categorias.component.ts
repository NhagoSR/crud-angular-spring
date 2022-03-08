import { Categorias } from './../model/categorias';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, empty, Observable, of } from 'rxjs';
import { FilmesService } from '../services/filmes.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import Swal from 'sweetalert2';
import { AdcCategoriasComponent } from 'src/app/shared/components/adc-categorias/adc-categorias.component';
import { UpdCategoriasComponent } from 'src/app/shared/components/upd-categorias/upd-categorias.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias$: Observable<Categorias[]>;
  displayedColumns = ['id','nome','acoes'];

  categoriaSelecionado!: Categorias["id"];

  constructor(
    private FilmesService: FilmesService,
    public dialog: MatDialog)
    {
      this.categorias$ = this.FilmesService.listCategoria()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar categorias.')
        return of([])
      })
    );
    }

    onRefresh(){
      this.categorias$ = this.FilmesService.listCategoria().pipe(
        catchError(error =>{
          console.error(error);
          this.onError('Erro ao carregar categorias.')
          return of([])
        })
      )
    }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

    onOpenAdcCategorias(){
      this.dialog.open(AdcCategoriasComponent).afterClosed().subscribe(
        success => this.onRefresh(),
        error => this.onError(error)
      )
    }

    onOpenUpdCategorias(_id:number){
      this.dialog.open(UpdCategoriasComponent, {
        data: _id
      }).afterClosed().subscribe(
        success => this.onRefresh(),
        error => this.onError(error)
      );
    }

    onDltCategorias(id: any){
      console.log("categoria", id)
      this.categoriaSelecionado = id;
      console.log("categoriaselecionado", this.categoriaSelecionado)

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
          this.FilmesService.deleteCategoria(this.categoriaSelecionado)
          .subscribe(
            success => this.onRefresh(),
            error => (this.onError(error),
                      Swal.fire(
                        'Erro!',
                        'O categoria não foi deletada. <br>Provavelmente há algum filme com essa categoria',
                        'error'
                      ))
          );

          Swal.fire(
            'Deletado!',
            'O categoria foi deletado',
            'success'
          )
        }
      })
    }
  ngOnInit() {
  }

}
