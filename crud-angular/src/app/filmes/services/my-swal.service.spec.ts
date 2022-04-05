/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MySwalService } from './my-swal.service';

describe('Service: MySwal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySwalService]
    });
  });

  it('should ...', inject([MySwalService], (service: MySwalService) => {
    expect(service).toBeTruthy();
  }));
});
