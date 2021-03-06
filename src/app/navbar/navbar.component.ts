import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homePath:string='/'+localStorage.getItem('role')+'/home';
  logout():void {
    this.authService.logout().subscribe((result)=>{
      this.router.navigateByUrl('/login',{state:{data:result.message}})
    })
  }

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

}
