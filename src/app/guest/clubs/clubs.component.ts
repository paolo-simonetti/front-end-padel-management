import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/classes/Club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs:Club[]=[];

  constructor(private clubService:ClubService) { }

  ngOnInit(): void {
    this.clubService.findAll().subscribe((result)=>{
      this.clubs=result;
    });
  }

}
