import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClubProposalsComponent } from './new-club-proposals.component';

describe('NewClubProposalsComponent', () => {
  let component: NewClubProposalsComponent;
  let fixture: ComponentFixture<NewClubProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClubProposalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClubProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
