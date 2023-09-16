import { TestBed } from '@angular/core/testing';

import { PhoneCallService } from './phone-call.service';

describe('PhoneCallService', () => {
  let service: PhoneCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
