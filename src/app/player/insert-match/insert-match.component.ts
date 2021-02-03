import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsertMatchDTO } from 'src/app/messages/InsertMatchDTO';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-insert-match',
  templateUrl: './insert-match.component.html',
  styleUrls: ['./insert-match.component.css']
})
export class InsertMatchComponent implements OnInit {

  message:string='';
  missingPlayers:number[]=[0,1,2,3]

  removeMessage():void {
    this.message='';
  } 

  inPlayers:ValidatorFn=control=>{
    return (control.value!==null&&control.value<0&&control.value>3?{inPlayers:true}:null)
  }

  insertMatchDTO = new FormGroup ({
    missingPlayers:new FormControl(0,[Validators.required,this.inPlayers])  
  })

  buildInsertMatchDTO(courtId:any,missingPlayer:any,dateAndTimeChosen:any):InsertMatchDTO {
    let insertMatchDTO:InsertMatchDTO=new InsertMatchDTO();
    insertMatchDTO.courtId=courtId;
    insertMatchDTO.missingPlayers=missingPlayer;
    insertMatchDTO.date=dateAndTimeChosen!.date;
    insertMatchDTO.hour=dateAndTimeChosen!.hour;
    insertMatchDTO.minute=dateAndTimeChosen!.minute;
    insertMatchDTO.durationHour=dateAndTimeChosen!.durationHour;
    insertMatchDTO.durationMinute=dateAndTimeChosen!.durationMinute;
    return insertMatchDTO;
  }

  onSubmit() {
      this.matchService.insert(this.buildInsertMatchDTO(
        window.history.state.courtId,this.insertMatchDTO.controls.missingPlayers.value,
        window.history.state.dateAndTimeChosen)).subscribe((result)=>{
          this.router.navigateByUrl('/player/home', {state:{message:result.message}});
      },(err) =>{
        this.router.navigateByUrl('/player/home', {state:{message:err.error.message}});
      })
    
  }

  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit(): void {}

}
