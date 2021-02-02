import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Court } from 'src/app/classes/Court';
import { PadelMatch } from 'src/app/classes/PadelMatch';
import { CourtService } from 'src/app/services/court.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {
  message:string='';
  match:PadelMatch=new PadelMatch();
  courtId:number;
  matches:PadelMatch[]=[];

  removeMessage():void {
    this.message=''
  }

  inMatches:ValidatorFn=control=>{
    return (this.matches.map(match=>match.id).find(control.value.id)==undefined?{inMatches:true}:null)
  }

  updateMatchDTO = new FormGroup ({
    matchControl:new FormControl(this.match, [Validators.required, this.inMatches]),  
  })

  onSubmit() {
    this.matchService.update(this.courtId,this.updateMatchDTO.controls.matchControl.value.id,
      this.updateMatchDTO.controls.matchControl.value.missingPlayers).subscribe((result)=>{
        this.router.navigateByUrl('/player/home',{state:{message:result.message}})
      }, (err)=>{
        this.router.navigateByUrl('/player/home',{state:{message:err.error.message}})
      })
  }

  constructor(private route:ActivatedRoute, private courtService:CourtService, private matchService:MatchService, 
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.courtId=params.courtId;
    })
    this.matchService.findAllByPlayer().subscribe((result)=>{
      this.matches=result;
    })
  }

}
