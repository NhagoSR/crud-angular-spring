import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Estudios } from 'src/app/filmes/model/estudios';
import { FilmesService } from 'src/app/filmes/services/filmes.service';
import Swal from 'sweetalert2';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-adc-estudios',
  templateUrl: './adc-estudios.component.html',
  styleUrls: ['./adc-estudios.component.scss']
})
export class AdcEstudiosComponent implements OnInit {

  filmeEstudios$: Observable<Estudios[]>;
  estudiosPost$: any;

  constructor(
    private filmesService: FilmesService,
    public dialog: MatDialog
  ) {
    this.filmeEstudios$ = this.filmesService.listEstudio().
      pipe(
      tap(filmeEstudios$ => console.log(filmeEstudios$))
    );
  }

  ngOnInit() {
  }
  public closeAllDialogs(){
    console.log(this.dialog);
    this.dialog.closeAll();
  }

  onSubmitEstudioAddForm(data:any){
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
        this.estudiosPost$ = this.filmesService.postEstudio(data)

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
