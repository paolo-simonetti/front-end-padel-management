import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasPendingProposalsGuard } from '../guards/has-pending-proposals.guard';
import { HomepageComponent } from '../homepage/homepage.component';
import { ClubsComponent } from './clubs/clubs.component';
import { JoinClubComponent } from './join-club/join-club.component';
import { NewClubProposalComponent } from './new-club-proposal/new-club-proposal.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'clubs', canActivate:[HasPendingProposalsGuard], component:ClubsComponent},
  {path:'new-club-proposal', canActivate:[HasPendingProposalsGuard], component:NewClubProposalComponent},
  {path:'join-club/:clubId', canActivate:[HasPendingProposalsGuard], component:JoinClubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
