import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  message:string='';
  imageError: string='';
  isImageSaved: boolean=false;
  cardImageBase64: string=null;

  dateMustBePast:ValidatorFn=control=>{
    const millisecondsInput:number=Date.parse(control!.value.toString());
    const millisecondsToday:number=Date.parse(moment().format("YYYY-MM-DD"))
    return (millisecondsInput!==undefined&&millisecondsToday<=millisecondsInput?{dateMustBePast:true}:null)
  }

  printResponse(response:string):void {
    console.log(response);
  }

  usernameAlreadyInUse:any;
  userAlreadyExists:ValidatorFn=control=>{
    if (!!control.value) {
      this.authService.userAlreadyExists(control.value).subscribe((result)=>{
        this.usernameAlreadyInUse=(result.response===true? {userAlreadyExists:true}:null);
        return this.usernameAlreadyInUse;
      });
    } else {
      return null;
    }
  }
  
  signupDTO = new FormGroup ({
    username:new FormControl('', [Validators.required, this.userAlreadyExists]),
    password:new FormControl('', Validators.required),
    dateOfBirth:new FormControl(new Date(moment().format("YYYY-MM-DD")), [Validators.required, this.dateMustBePast]),
    mailAddress:new FormControl('', [Validators.required, Validators.email]),
    name:new FormControl('', Validators.required),
    surname:new FormControl('', Validators.required),
    mobile:new FormControl('', [Validators.required, Validators.pattern('(^[\+]393|^[\+]39 3|^[3])[0-9]{9}')]),
    proPic:new FormControl(this.cardImageBase64)
  })
  
  removeMessage():void {
    this.message='';
  }

  fileChangeEvent(fileInput: any):boolean {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  removeImage():void {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

  onSubmit():void {
    this.authService.signup(this.signupDTO.value).subscribe((result)=>{
      this.router.navigateByUrl('/login', {state:{data:result.message}});
    }, (err)=> {
      this.message="Invalid data! Try changing the username";
    })
  }

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

}
