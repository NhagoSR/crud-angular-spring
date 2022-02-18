import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filmes } from '../model/filmes';

@Injectable()

export class DropdownService {

  constructor(private http: HttpClient) { }
}
