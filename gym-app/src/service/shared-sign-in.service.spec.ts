import { TestBed } from '@angular/core/testing';

import { SharedSignInService } from './shared-sign-in.service';

describe('SharedSignInService', () => {
  let service: SharedSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
