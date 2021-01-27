import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  message:any='';
  role:string=localStorage.getItem('role');
  constructor() { }

  removeMessage():void {
    this.message='';
  }

  ngOnInit(): void {
    this.message=window.history.state.message;
  }

}
