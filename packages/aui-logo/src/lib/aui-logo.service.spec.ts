import {TestBed} from '@angular/core/testing';

import {AuiLogoService} from './aui-logo.service';

describe('AuiLogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuiLogoService = TestBed.get(AuiLogoService);
    expect(service).toBeTruthy();
  });
});
