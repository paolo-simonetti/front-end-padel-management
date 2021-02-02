import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/classes/Court';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css']
})
export class CourtsComponent implements OnInit {

  courts:Court[]=[];
  message:string;

  removeMessage():void {
    this.message='';
  }

  goToInsertMatch(courtId:number) {
    this.router.navigateByUrl('/player/insert-match',{state:{
      courtId:courtId,
      dateAndTimeChosen:window.history.state.dateAndTimeChosen
    }})
  }

  constructor(private router:Router) {}

  ngOnInit(): void {
    console.log(window.history.state.data)
    this.message=window.history.state.message;
    this.courts=window.history.state.data;
  }
}
