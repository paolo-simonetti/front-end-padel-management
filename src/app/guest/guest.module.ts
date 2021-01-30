import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { ClubsComponent } from './clubs/clubs.component';
import { JoinProposalsComponent } from './join-proposals/join-proposals.component';
import { JoinClubComponent } from './join-club/join-club.component';
import { NewClubProposalComponent } from './new-club-proposal/new-club-proposal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClubsComponent, JoinProposalsComponent, JoinClubComponent, NewClubProposalComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
