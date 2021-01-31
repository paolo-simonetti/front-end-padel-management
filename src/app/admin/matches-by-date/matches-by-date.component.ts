import { Component, OnInit } from '@angular/core';
import { Slot, SLOTS } from 'src/app/classes/Slots';
import { CourtWithMatches } from 'src/app/messages/CourtWithMatches';
import { CourtService } from 'src/app/services/court.service';

@Component({
  selector: 'app-matches-by-date',
  templateUrl: './matches-by-date.component.html',
  styleUrls: ['./matches-by-date.component.css']
})
export class MatchesByDateComponent implements OnInit {
  date:Date;
  message:string;
  courts:CourtWithMatches[]=[];
  slots:Slot[]=SLOTS;

  removeMessage():void {
    this.message='';
  }

  seeCourts() {
    this.courtService.findAllMatchesByDate(this.date).subscribe((result)=>this.courts=result);
  }

  isThereAMatch(court:CourtWithMatches, slot:Slot):boolean {
    if (court.slots.filter(s=>s.idSlot==slot.id).length>0) {
      let slotItem=court.slots.filter(s=>s.idSlot==slot.id).pop();
      return slotItem.isThereAMatch;
    }
    return false;
  }

  isThereAPayedMatch(court:CourtWithMatches, slot:Slot):boolean {
    if (court.slots.filter(s=>s.idSlot==slot.id).length>0) {
      let slotItem=court.slots.filter(s=>s.idSlot==slot.id).pop();
      return slotItem.isThereAPayedMatch;
    }
    return false;
  }

  getMatchCreatorUsernameFromCourtAndSlot(court:CourtWithMatches,slot:Slot):string {
    if (this.isThereAMatch(court,slot)) {
      let slotItem=court.slots.filter(s=>s.idSlot==slot.id).pop();
      return slotItem.matchCreatorUsername;
    }
    return "";
  }


  constructor(private courtService:CourtService) { }

  ngOnInit(): void {
  }

}
