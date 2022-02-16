import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdFilmesComponent } from './upd-filmes.component';

describe('UpdFilmesComponent', () => {
  let component: UpdFilmesComponent;
  let fixture: ComponentFixture<UpdFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
