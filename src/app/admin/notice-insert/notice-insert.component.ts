import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notice-insert',
  templateUrl: './notice-insert.component.html',
  styleUrls: ['./notice-insert.component.css']
})
export class NoticeInsertComponent implements OnInit {

  message:string;
  newMessage:string;

  removeMessage():void {
    this.message='';
  }

  insertMessage() {
    this.noticeService.insert(this.newMessage).subscribe((result)=>{
      this.router.navigateByUrl('/admin/notices', {state:{data:result.message}});
    })
  }

  constructor(private noticeService:NoticeService, private router:Router) { }

  ngOnInit(): void {}

}
