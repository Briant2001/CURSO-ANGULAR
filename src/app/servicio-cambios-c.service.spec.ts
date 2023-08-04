import { TestBed } from '@angular/core/testing';

import { ServicioCambiosCService } from './servicio-cambios-c.service';

describe('ServicioCambiosCService', () => {
  let service: ServicioCambiosCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCambiosCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
