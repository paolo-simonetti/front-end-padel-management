import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/classes/Notice';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  notices:Notice[]=[];
  message:string;

  removeMessage():void {
    this.message='';
  }

  removeNotice(id:number):void {
    this.noticeService.delete(id).subscribe((result)=>{
      this.message=result.message;
      this.noticeService.findAll().subscribe((result1)=>{
        this.notices=result1;
      })
    })
  }

  constructor(private noticeService:NoticeService) {}

  ngOnInit(): void {
    this.noticeService.findAll().subscribe((result)=>{
      this.notices=result;
    });
  }


}
