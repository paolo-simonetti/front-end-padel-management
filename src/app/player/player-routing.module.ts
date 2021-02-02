import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { CourtsComponent } from './courts/courts.component';
import { FindMatchByDateComponent } from './find-match-by-date/find-match-by-date.component';
import { InsertMatchComponent } from './insert-match/insert-match.component';
import { PadelmatchComponent } from './padelmatch/padelmatch.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { VerifyAvailabilityComponent } from './verify-availability/verify-availability.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'verify-availability', component:VerifyAvailabilityComponent},
  {path:'available-courts', component:CourtsComponent},
  {path:'insert-match', component:InsertMatchComponent},
  {path:'update-match/:courtId', component:UpdateMatchComponent},
  {path:'find-match-by-date', component:FindMatchByDateComponent},
  {path:'padel-match', component:PadelmatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
