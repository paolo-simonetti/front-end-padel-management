import { Component, OnInit } from '@angular/core';
import { OutputFindAllMatchesByPlayerDTO } from 'src/app/messages/OutputFindAllMatchesByPlayerDTO';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-find-match-by-date',
  templateUrl: './find-match-by-date.component.html',
  styleUrls: ['./find-match-by-date.component.css']
})
export class FindMatchByDateComponent implements OnInit {

  date:Date;
  message:string;
  matches:OutputFindAllMatchesByPlayerDTO[]=[]

  seeMatches() {
    this.matchService.findAllMatchesByDate(this.date).subscribe((result)=>this.matches=result);
  }

  removeMessage():void {
    this.message='';
  }

  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
  }

}
