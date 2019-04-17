import { TestBed } from '@angular/core/testing';

import { GlobalAuthService } from './global-auth.service';

describe('GlobalAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalAuthService = TestBed.get(GlobalAuthService);
    expect(service).toBeTruthy();
  });
});
