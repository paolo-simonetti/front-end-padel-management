import { Component, OnInit } from '@angular/core';
import { Court } from 'src/app/classes/Court';
import { CourtService } from 'src/app/services/court.service';

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

  dismiss(id:number) {
    this.courtService.dismiss(id).subscribe((result)=>{
      this.message=result.message;
      this.courtService.findAll().subscribe((result1)=>{
        this.courts=result1;
      })
    });
  }

  restore(id:number) {
    this.courtService.restore(id).subscribe((result)=>{
      this.message=result.message;
      this.courtService.findAll().subscribe((result1)=>{
        this.courts=result1;
      })
    });
  }

  constructor(private courtService:CourtService) {}

  ngOnInit(): void {
    this.courtService.findAll().subscribe((result)=>{
      this.courts=result;
    });
  }

}
