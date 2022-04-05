import { Filmes } from './../model/filmes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, take, tap } from 'rxjs/operators';
import { Categorias } from '../model/categorias';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'api';

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
      return this.httpClient.post<Filmes[]>(this.API+'/filmes', data).subscribe((result)=>{
        console.warn("result", result)
      })
    }

    postCategoria(data:any) {
      return this.httpClient.post<Categorias[]>(this.API+'/categorias', data).subscribe((result)=>{
        console.warn("result", result)
      })
    }

    postEstudio(data:any) {
      return this.httpClient.post<Estudios[]>(this.API+'/estudios', data).subscribe((result)=>{
        console.warn("result", result)
      })
    }

    //METODOS DE DELETE
    deleteFilme(_id: number){
      return this.httpClient.delete<Filmes>(`${this.API}/filmes/${_id}`).pipe(take(1));
    }

    deleteCategoria(id: number){
      return this.httpClient.delete<Categorias>(`${this.API}/categorias/${id}`).pipe(take(1));
    }

    deleteEstudio(id: number){
      return this.httpClient.delete<Estudios>(`${this.API}/estudios/${id}`).pipe(take(1));
    }

    //METODOS DE UPDATE
    updateFilme(_id: number, data:any){
      return this.httpClient.put<Filmes[]>(`${this.API}/filmes/${_id}`, data).subscribe((result)=>{
        console.warn("result", result)
      });
    }

    updateCategoria(_id: number, data:any){
      return this.httpClient.put<Categorias[]>(`${this.API}/categorias/${_id}`, data).subscribe((result)=>{
        console.warn("result", result)
      });
    }

    updateEstudio(_id: number, data:any){
      return this.httpClient.put<Estudios[]>(`${this.API}/estudios/${_id}`, data).subscribe((result)=>{
        console.warn("result", result)
      });
    }





}
