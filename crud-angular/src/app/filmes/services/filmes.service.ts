import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = '/api/filmes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Filme[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(filmes => console.log(filmes))
    );
  }
}
