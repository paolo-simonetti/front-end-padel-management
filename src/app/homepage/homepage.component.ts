import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  message:any='';
  role:string=localStorage.getItem('role');
  constructor(private playerService:PlayerService, private authService:AuthService, private router:Router) { }

  removeMessage():void {
    this.message='';
  }

  abandonClub() {
    this.playerService.abandonClub().subscribe((result)=>{
      this.authService.logout().subscribe((result1)=>{
        this.router.navigateByUrl('/login', {state:{data:result.message}});
      })
    })
  }

  ngOnInit(): void {
    this.message=window.history.state.message;
  }

}
