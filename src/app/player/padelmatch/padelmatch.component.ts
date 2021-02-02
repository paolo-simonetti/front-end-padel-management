import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { OutputFindAllMatchesByPlayerDTO } from 'src/app/messages/OutputFindAllMatchesByPlayerDTO';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-padelmatch',
  templateUrl: './padelmatch.component.html',
  styleUrls: ['./padelmatch.component.css']
})
export class PadelmatchComponent implements OnInit {

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

  deletePadelMatch(match:OutputFindAllMatchesByPlayerDTO) {
    if (this.moreThanAnHourAndHalfMissing(match)) {
      this.matchService.delete(match.id).subscribe((result)=>{
        this.message=result.message;
        this.matchService.findAllByPlayer().subscribe((result1)=>{
          this.matches=result1;
        })
      })
    } else {
      this.message='Forbidden deletion: less than an hour and half missing';
    }
  }

  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.matchService.findAllByPlayer().subscribe((result)=>{
      this.matches=result;
    })
  }

}
