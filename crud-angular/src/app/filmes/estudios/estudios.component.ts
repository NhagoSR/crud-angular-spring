import { Estudios } from './../model/estudios';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, empty, Observable, of } from 'rxjs';
import { FilmesService } from '../services/filmes.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import Swal from 'sweetalert2';
import { AdcEstudiosComponent } from 'src/app/shared/components/adc-estudios/adc-estudios.component';
import { UpdEstudiosComponent } from 'src/app/shared/components/upd-estudios/upd-estudios.component';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  estudios$: Observable<Estudios[]>;
  displayedColumns = ['id','nome','descricao','acoes'];

  estudioSelecionado!: Estudios["id"];

  constructor(
    private FilmesService: FilmesService,
    public dialog: MatDialog)
    {
      this.estudios$ = this.FilmesService.listEstudio()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar estudios.')
        return of([])
      })
    );
    }

    onRefresh(){
      this.estudios$ = this.FilmesService.listEstudio().pipe(
        catchError(error =>{
          console.error(error);
          this.onError('Erro ao carregar estudios.')
          return of([])
        })
      )
    }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

    onOpenAdcEstudios(){
      this.dialog.open(AdcEstudiosComponent).afterClosed().subscribe(
        success => this.onRefresh(),
        error => this.onError(error)
      )
    }

    onOpenUpdEstudios(_id:number){
      this.dialog.open(UpdEstudiosComponent, {
        data: _id
      }).afterClosed().subscribe(
        success => this.onRefresh(),
        error => this.onError(error)
      );
    }

    onDltEstudios(id: any){
      console.log("estudio", id)
      this.estudioSelecionado = id;
      console.log("estudioselecionado", this.estudioSelecionado)

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
          this.FilmesService.deleteEstudio(this.estudioSelecionado)
          .subscribe(
            success => this.onRefresh(),
            error => (this.onError(error),
                      Swal.fire(
                        'Erro!',
                        'O estudio não foi deletado. <br>Provavelmente há algum filme com esse estudio',
                        'error'
                      ))
          );

          Swal.fire(
            'Deletado!',
            'O estudio foi deletado',
            'success'
          )
        }
      })
    }
  ngOnInit() {
  }

}
