import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/classes/Club';
import { LEVELS } from 'src/app/classes/Levels';
import { ClubService } from 'src/app/services/club.service';


@Component({
  selector: 'app-join-club',
  templateUrl: './join-club.component.html',
  styleUrls: ['./join-club.component.css']
})
export class JoinClubComponent implements OnInit {

  club:Club=new Club();
  userLevel:number;
  levels:number[]=LEVELS;
  message:string;

  removeMessage():void {
    this.message='';
  }

  onSubmit() {
    this.clubService.joinClub(this.club.id,this.userLevel).subscribe((result)=>{
      this.router.navigateByUrl('/guest/home', {state:{message:result.message}});
    }); 
  }

  constructor(private route: ActivatedRoute, private clubService:ClubService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clubService.findById(params.clubId).subscribe((result)=>this.club=result);
    });
  }

}
