import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Categorias } from 'src/app/filmes/model/categorias';
import { FilmesService } from 'src/app/filmes/services/filmes.service';
import Swal from 'sweetalert2';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-upd-categorias',
  templateUrl: './upd-categorias.component.html',
  styleUrls: ['./upd-categorias.component.scss']
})
export class UpdCategoriasComponent implements OnInit {


  categorias$: Observable<Categorias[]>;
  categoriasAtual$: any;
  categoriasUpdate$: any;

  constructor(
    private filmesService: FilmesService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public idCategoria: number)
    {
      this.categorias$ = this.filmesService.listCategoria().
      pipe(
      tap(categorias$ => console.log(categorias$))
    );

    }

  ngOnInit(): void {
  }

  public closeAllDialogs(){
    console.log(this.dialog);
    this.dialog.closeAll();
  }

  onSubmitCategoriaUpdForm(data:any){
    console.log("categoria", this.idCategoria)
    this.categoriasAtual$ = this.filmesService.listCurrent(this.idCategoria).subscribe((result)=>
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

        this.categoriasUpdate$ = this.filmesService.updateCategoria(this.idCategoria, data)

        console.warn(this.idCategoria)
        console.warn(data)

        Swal.fire('Alterações Salvas!', '', 'success');
        this.closeAllDialogs()


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
