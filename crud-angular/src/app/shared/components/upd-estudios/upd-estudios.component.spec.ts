/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdEstudiosComponent } from './upd-estudios.component';

describe('UpdEstudiosComponent', () => {
  let component: UpdEstudiosComponent;
  let fixture: ComponentFixture<UpdEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
