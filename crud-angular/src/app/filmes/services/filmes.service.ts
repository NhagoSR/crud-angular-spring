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

  list() {
    return this.httpClient.get<Filmes[]>(this.API+'/filmes')
    .pipe(
      first(),
      tap(filmes => console.log(filmes))
    );
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

  postFilme(data:any) {
    return this.httpClient.post<Filmes[]>(this.API+'/filmes', data).subscribe((result)=>{
      console.warn("result", result)
    })
  }

  deleteFilme(_id: number){
    return this.httpClient.delete<Filmes>(`${this.API}/filmes/${_id}`).pipe(take(1));
  }

  listCurrent(_id: number){
    return this.httpClient.get<Filmes>(`${this.API}/filmes/${_id}`).pipe(take(1));
  }

  updateFilme(_id: number, data:any){
    return this.httpClient.put<Filmes[]>(`${this.API}/filmes/${_id}`, data).subscribe((result)=>{
      console.warn("result", result)});
  }



}
