import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatchesByDateComponent } from './matches-by-date/matches-by-date.component';
import { CourtsComponent } from './courts/courts.component';
import { InsertCourtComponent } from './insert-court/insert-court.component';
import { RenameCourtComponent } from './rename-court/rename-court.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MatchesByDateComponent, CourtsComponent, InsertCourtComponent, RenameCourtComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
