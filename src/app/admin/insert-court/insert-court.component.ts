import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourtService } from 'src/app/services/court.service';

@Component({
  selector: 'app-insert-court',
  templateUrl: './insert-court.component.html',
  styleUrls: ['./insert-court.component.css']
})
export class InsertCourtComponent implements OnInit {

  message:string;
  name:string;

  removeMessage():void {
    this.message='';
  }

  insertCourt() {
    this.courtService.insert(this.name).subscribe((result)=>{
      this.router.navigateByUrl('/admin/courts', {state:{data:result.message}});
    })
  }

  constructor(private courtService:CourtService, private router:Router) { }

  ngOnInit(): void {
  }

}
