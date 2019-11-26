import { TestBed } from '@angular/core/testing';

import { CurrentUserStoreService } from './current-user-store.service';

describe('CurrentUserStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentUserStoreService = TestBed.get(CurrentUserStoreService);
    expect(service).toBeTruthy();
  });
});
