/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdCategoriasComponent } from './upd-categorias.component';

describe('UpdCategoriasComponent', () => {
  let component: UpdCategoriasComponent;
  let fixture: ComponentFixture<UpdCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
