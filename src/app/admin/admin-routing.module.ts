import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { CourtsComponent } from './courts/courts.component';
import { InsertCourtComponent } from './insert-court/insert-court.component';
import { JoinProposalsComponent } from './join-proposals/join-proposals.component';
import { MatchesByDateComponent } from './matches-by-date/matches-by-date.component';
import { NoticeInsertComponent } from './notice-insert/notice-insert.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';
import { NoticesComponent } from './notices/notices.component';
import { RenameCourtComponent } from './rename-court/rename-court.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'matches-by-date', component:MatchesByDateComponent},
  {path:'courts', component:CourtsComponent},
  {path:'insert-court', component:InsertCourtComponent},
  {path:'rename-court/:courtId', component:RenameCourtComponent},
  {path:'update-notice/:noticeId', component:NoticeUpdateComponent},
  {path:'notices', component:NoticesComponent},
  {path:'insert-notice', component:NoticeInsertComponent},
  {path:'join-proposals', component:JoinProposalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
