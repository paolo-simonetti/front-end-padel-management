import { Component, OnInit } from '@angular/core';
import { OutputFindAllMatchesByPlayerDTO } from 'src/app/messages/OutputFindAllMatchesByPlayerDTO';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-player-call-for-action',
  templateUrl: './player-call-for-action.component.html',
  styleUrls: ['./player-call-for-action.component.css']
})
export class PlayerCallForActionComponent implements OnInit {

  message:string=''
  matches:OutputFindAllMatchesByPlayerDTO[]=[]

  removeMessage() {
    this.message=''
  }

  moreThanAnHourAndHalfMissing(match:OutputFindAllMatchesByPlayerDTO):boolean {
    if (match!=undefined) {
      let millisecondsInput:number=Date.parse(match.date+"T"+match.hour+":"+match.minute+":00");
      const millisecondsToday:number=Date.now();
      return millisecondsInput>=millisecondsToday+90*60000; 
    } else {
      return false;
    }
  }

  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.matchService.findAllByPlayer().subscribe((result)=>{
      this.matches=result;
    })
  }

}
