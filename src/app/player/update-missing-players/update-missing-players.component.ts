import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-update-missing-players',
  templateUrl: './update-missing-players.component.html',
  styleUrls: ['./update-missing-players.component.css']
})
export class UpdateMissingPlayersComponent implements OnInit {

  message:string='';
  missingPlayers:number[]=[0,1,2,3];
  matchId:number

  removeMessage():void {
    this.message='';
  } 

  inPlayers:ValidatorFn=control=>{
    return (control.value!==null&&control.value<0&&control.value>3?{inPlayers:true}:null)
  }

  updateMatchDTO = new FormGroup ({
    missingPlayers:new FormControl(0,[Validators.required,this.inPlayers])  
  })

  onSubmit() {
      this.matchService.updateMissingPlayers(this.updateMatchDTO.controls.missingPlayers.value, this.matchId)
        .subscribe((result)=>{
          this.router.navigateByUrl('/player/home', {state:{message:result.message}});
        },(err) =>{
          this.router.navigateByUrl('/player/home', {state:{message:err.error.message}});
        })
    
  }

  constructor(private matchService:MatchService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.matchId=params.matchId;
    })
  }


}
