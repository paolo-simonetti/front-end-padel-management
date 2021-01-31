import { TestBed } from '@angular/core/testing';

import { JoinProposalService } from './join-proposal.service';

describe('JoinProposalService', () => {
  let service: JoinProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
