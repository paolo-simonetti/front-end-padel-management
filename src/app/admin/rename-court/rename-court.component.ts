import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Court } from 'src/app/classes/Court';
import { CourtService } from 'src/app/services/court.service';

@Component({
  selector: 'app-rename-court',
  templateUrl: './rename-court.component.html',
  styleUrls: ['./rename-court.component.css']
})
export class RenameCourtComponent implements OnInit {

  message:string;
  newName:string;
  court:Court;

  removeMessage():void {
    this.message='';
  }

  renameCourt() {
    this.courtService.rename(this.court.id,this.newName).subscribe((result)=>{
      this.router.navigateByUrl('/admin/courts', {state:{data:result.message}});
    })
  }

  constructor(private route: ActivatedRoute, private courtService:CourtService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.courtService.findById(params.courtId).subscribe((result)=>{
        this.court=result;
        this.newName=this.court.name;
      })
    })
  }

}
