import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClubProposalComponent } from './new-club-proposal.component';

describe('NewClubProposalComponent', () => {
  let component: NewClubProposalComponent;
  let fixture: ComponentFixture<NewClubProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClubProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClubProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
