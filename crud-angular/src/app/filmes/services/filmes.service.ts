import { Usuarios } from './../model/usuarios';
import { Filmes } from './../model/filmes';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, take, tap } from 'rxjs/operators';
import { Categorias } from '../model/categorias';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'api';

  header = new HttpHeaders().set('Authorization', `${sessionStorage.getItem('tipo')} ${sessionStorage.getItem('token')}`)


  constructor(private httpClient: HttpClient) { }

  //METODOS DE GET
    list() {
      return this.httpClient.get<Filmes[]>(this.API+'/filmes')
      .pipe(
        first(),
        tap(filmes => console.log(filmes))
      );
    }

    listCurrent(_id: number){
      return this.httpClient.get<Filmes>(`${this.API}/filmes/${_id}`).pipe(take(1));
    }

    getUser(id: number){
      return this.httpClient.get<Usuarios>(`${this.API}/usuarios/${id}`).pipe(take(1));
    }

    getUsers(){
      return this.httpClient.get<Usuarios>(`${this.API}/usuarios/`).pipe(take(1));
    }

    listCategoria():Observable<any> {
      return this.httpClient.get<Categorias[]>(this.API+'/categorias')
      .pipe(
        first(),
        tap(categorias => console.log(categorias))
      );
    }

    listEstudio():Observable<any> {
      return this.httpClient.get<Estudios[]>(this.API+'/estudios')
      .pipe(
          first(),
          tap(estudios => console.log(estudios))
        );
    }

    //METODOS DE POST
    postFilme(data:any) {
      return this.httpClient.post<Filmes[]>(this.API+'/filmes', data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      })

    }

    postCategoria(data:any) {
      return this.httpClient.post<Categorias[]>(this.API+'/categorias', data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      })
    }

    postEstudio(data:any) {
      return this.httpClient.post<Estudios[]>(this.API+'/estudios', data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      })
    }

    postUsuario(data:any) {
      return this.httpClient.post<Usuarios[]>(this.API+'/usuarios', data).subscribe((result)=>{
        console.warn("result",result)
      })
    }

    //METODOS DE DELETE
    deleteFilme(_id: number){
      return this.httpClient.delete<Filmes>(`${this.API}/filmes/${_id}`, {headers: this.header}).pipe(take(1));
    }

    deleteCategoria(id: number){
      return this.httpClient.delete<Categorias>(`${this.API}/categorias/${id}`, {headers: this.header}).pipe(take(1));
    }

    deleteEstudio(id: number){
      return this.httpClient.delete<Estudios>(`${this.API}/estudios/${id}`, {headers: this.header}).pipe(take(1));
    }

    //METODOS DE UPDATE
    updateFilme(_id: number, data:any){
      return this.httpClient.put<Filmes[]>(`${this.API}/filmes/${_id}`, data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      });
    }

    updateCategoria(_id: number, data:any){
      return this.httpClient.put<Categorias[]>(`${this.API}/categorias/${_id}`, data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      });
    }

    updateEstudio(_id: number, data:any){
      return this.httpClient.put<Estudios[]>(`${this.API}/estudios/${_id}`, data, {headers: this.header}).subscribe((result)=>{
        console.warn("result", result)
      });
    }

    //METODOS PARA FILTRAGEM
    getfiltroPorCategoriaEstudio(categoria: string, estudio: string){
      const params = new HttpParams()
      .set('categoria', categoria)
      .set('estudio', estudio);

      if (categoria == "null" || categoria == null){
        categoria = '';
      }
      if(estudio == "null" || estudio == null){
        estudio = '';
      }

      return this.httpClient.get<Filmes[]>(this.API + '/filmes/filterCategoriaEstudio?categoria=' + categoria + '&estudio=' + estudio);
    }

    getfiltroPorNomeCategoriaEstudio(titulo: string, categoria: string, estudio: string){
      const params = new HttpParams()
      .set('titulo', titulo)
      .set('categoria', categoria)
      .set('estudio', estudio);

      if(titulo == null && categoria == null && estudio == null){
        return this.list();
      }
      if (categoria == "null" || categoria == null){
        categoria = '';
      }
      if(estudio == "null" || estudio == null){
        estudio = '';
      }

      return this.httpClient.get<Filmes[]>(this.API + '/filmes/filterTituloCategoriaEstudio?titulo=' + titulo +
                                                      '&categoria=' + categoria +
                                                      '&estudio=' + estudio);
    }





}
