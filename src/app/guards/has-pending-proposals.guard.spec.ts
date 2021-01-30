import { TestBed } from '@angular/core/testing';

import { HasPendingProposalsGuard } from './has-pending-proposals.guard';

describe('HasPendingProposalsGuard', () => {
  let guard: HasPendingProposalsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasPendingProposalsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
