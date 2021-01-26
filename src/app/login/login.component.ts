import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message:string=''
  
  authorizationDTO = new FormGroup ({
    username:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })

  removeMessage() {
    this.message='';
  }

  onSubmit():void {
    this.authService.login(this.authorizationDTO.value).subscribe((result)=>{
      this.authService.saveToken(result.token, result.role);
      this.router.navigateByUrl('/home');
    },
    (err)=>{
      if (err.status==401) {
        this.message="Wrong credentials!"
      }
    }
    )
  }

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    if (!!window.history.state.data) {
      this.message=window.history.state.data;
    }
  }

}
