import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { CallForActionByOthersComponent } from './call-for-action-by-others/call-for-action-by-others.component';
import { CourtsComponent } from './courts/courts.component';
import { FindMatchByDateComponent } from './find-match-by-date/find-match-by-date.component';
import { InsertMatchComponent } from './insert-match/insert-match.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { PadelmatchComponent } from './padelmatch/padelmatch.component';
import { PlayerCallForActionComponent } from './player-call-for-action/player-call-for-action.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { UpdateMissingPlayersComponent } from './update-missing-players/update-missing-players.component';
import { VerifyAvailabilityComponent } from './verify-availability/verify-availability.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'verify-availability', component:VerifyAvailabilityComponent},
  {path:'available-courts', component:CourtsComponent},
  {path:'insert-match', component:InsertMatchComponent},
  {path:'update-match/:courtId', component:UpdateMatchComponent},
  {path:'find-match-by-date', component:FindMatchByDateComponent},
  {path:'padel-match', component:PadelmatchComponent},
  {path:'member-details', component:MemberDetailsComponent}, 
  {path:'update-missing-players', component:UpdateMissingPlayersComponent},
  {path:'call-for-actions-by-others', component:CallForActionByOthersComponent},
  {path:'call-for-action-by-player', component:PlayerCallForActionComponent},
  {path:'update-missing-players/:matchId', component:UpdateMissingPlayersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
