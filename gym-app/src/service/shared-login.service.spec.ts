import { TestBed } from '@angular/core/testing';

import { SharedLoginService } from './shared-login.service';

describe('SharedLoginService', () => {
  let service: SharedLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
