import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice } from 'src/app/classes/Notice';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css']
})
export class NoticeUpdateComponent implements OnInit {

  message:string;
  newMessage:string;
  notice:Notice;

  removeMessage():void {
    this.message='';
  }

  updateMessage(newMessage:string) {
    this.notice.message=newMessage;
    this.noticeService.update(this.notice).subscribe((result)=>{
      this.router.navigateByUrl('/admin/notices', {state:{data:result.message}});
    })
  }

  constructor(private route: ActivatedRoute, private noticeService:NoticeService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.noticeService.findById(params.noticeId).subscribe((result)=>{
        this.notice=result;
        this.newMessage=this.notice.message;
      })
    })
  }

}
