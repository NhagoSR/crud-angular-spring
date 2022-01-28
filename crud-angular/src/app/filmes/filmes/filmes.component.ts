import { FilmesService } from '../services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../model/filme';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filmes$: Observable<Filme[]>;
  // filmes: Filme[] = [];
  displayedColumns = ['name','category'];

  // FilmesService: FilmesService;

  constructor(private FilmesService: FilmesService) {
    // this.filmes = [];
    // this.filmesService = new FilmesService();
    this.filmes$ = this.FilmesService.list();

    // this.FilmesService.list().subscribe(filmes => this.filmes = filmes);
  }

  ngOnInit(): void {

  }

}
