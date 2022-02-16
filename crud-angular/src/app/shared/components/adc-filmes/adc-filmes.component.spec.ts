import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcFilmesComponent } from './adc-filmes.component';

describe('AdcFilmesComponent', () => {
  let component: AdcFilmesComponent;
  let fixture: ComponentFixture<AdcFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
