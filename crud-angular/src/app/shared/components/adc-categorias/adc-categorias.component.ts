import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Categorias } from 'src/app/filmes/model/categorias';
import { FilmesService } from 'src/app/filmes/services/filmes.service';
import Swal from 'sweetalert2';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


@Component({
  selector: 'app-adc-categorias',
  templateUrl: './adc-categorias.component.html',
  styleUrls: ['./adc-categorias.component.scss']
})
export class AdcCategoriasComponent implements OnInit {

  filmeCategorias$: Observable<Categorias[]>;
  categoriasPost$: any;

  constructor(
    private filmesService: FilmesService,
    public dialog: MatDialog
  ) {
    this.filmeCategorias$ = this.filmesService.listCategoria().
      pipe(
      tap(filmeCategorias$ => console.log(filmeCategorias$))
    );
  }

  ngOnInit() {
  }
  public closeAllDialogs(){
    console.log(this.dialog);
    this.dialog.closeAll();
  }

  onSubmitCategoriaAddForm(data:any){
    this.filmeCategorias$ = this.filmesService.listCategoria()
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
        this.categoriasPost$ = this.filmesService.postCategoria(data)

        console.warn(data)

        Swal.fire('Salvo!', '', 'success');
        this.closeAllDialogs()



      } else if (result.isDenied) {
        Swal.fire('O filme não foi salvo', '', 'info');
        this.closeAllDialogs()
      }
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
