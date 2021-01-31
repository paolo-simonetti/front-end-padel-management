import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatchesByDateComponent } from './matches-by-date/matches-by-date.component';
import { CourtsComponent } from './courts/courts.component';
import { InsertCourtComponent } from './insert-court/insert-court.component';
import { RenameCourtComponent } from './rename-court/rename-court.component';
import { FormsModule } from '@angular/forms';
import { JoinProposalsComponent } from './join-proposals/join-proposals.component';
import { NoticeInsertComponent } from './notice-insert/notice-insert.component';
import { NoticesComponent } from './notices/notices.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';


@NgModule({
  declarations: [MatchesByDateComponent, CourtsComponent, InsertCourtComponent, RenameCourtComponent, JoinProposalsComponent, NoticeInsertComponent, NoticesComponent, NoticeUpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
