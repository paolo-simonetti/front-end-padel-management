import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PadelmatchComponent } from './padelmatch/padelmatch.component';
import { VerifyAvailabilityComponent } from './verify-availability/verify-availability.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourtsComponent } from './courts/courts.component';
import { InsertMatchComponent } from './insert-match/insert-match.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { FindMatchByDateComponent } from './find-match-by-date/find-match-by-date.component';


@NgModule({
  declarations: [PadelmatchComponent, VerifyAvailabilityComponent, CourtsComponent, InsertMatchComponent, UpdateMatchComponent, FindMatchByDateComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayerModule { }
