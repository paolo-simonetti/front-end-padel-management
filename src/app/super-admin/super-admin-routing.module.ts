import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewClubProposalsComponent } from './new-club-proposals/new-club-proposals.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'newClubProposals', component:NewClubProposalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
