import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Filmes } from '../model/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'api/filmes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Filmes[]>(this.API)
    .pipe(
      first(),
      tap(filmes => console.log(filmes))
    );
  }
}
