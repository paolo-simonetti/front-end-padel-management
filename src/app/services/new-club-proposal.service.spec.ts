import { TestBed } from '@angular/core/testing';

import { NewClubProposalService } from './new-club-proposal.service';

describe('NewClubProposalService', () => {
  let service: NewClubProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewClubProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
