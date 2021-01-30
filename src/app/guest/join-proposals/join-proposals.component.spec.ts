import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinProposalsComponent } from './join-proposals.component';

describe('JoinProposalsComponent', () => {
  let component: JoinProposalsComponent;
  let fixture: ComponentFixture<JoinProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinProposalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
