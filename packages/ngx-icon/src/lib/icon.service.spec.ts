import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';

describe('NgxIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service).toBeTruthy();
  });
});
