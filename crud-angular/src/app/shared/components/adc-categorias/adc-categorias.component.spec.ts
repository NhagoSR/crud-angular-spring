/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdcCategoriasComponent } from './adc-categorias.component';

describe('AdcCategoriasComponent', () => {
  let component: AdcCategoriasComponent;
  let fixture: ComponentFixture<AdcCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
