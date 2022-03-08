/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdcEstudiosComponent } from './adc-estudios.component';

describe('AdcEstudiosComponent', () => {
  let component: AdcEstudiosComponent;
  let fixture: ComponentFixture<AdcEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
