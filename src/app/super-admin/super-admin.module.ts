import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { NewClubProposalsComponent } from './new-club-proposals/new-club-proposals.component';


@NgModule({
  declarations: [NewClubProposalsComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
