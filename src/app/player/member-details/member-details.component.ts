import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LEVELS } from 'src/app/classes/Levels';
import { Player } from 'src/app/classes/Player';
import { PlayerService } from 'src/app/services/player.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  message:string='';
  imageError: string='';
  isImageSaved: boolean=false;
  cardImageBase64: string=null;
  playerDTOForService:Player=new Player();
  levels:number[]=LEVELS

  inLevels:ValidatorFn=control=>{
    return (control.value!==null&&(control.value<1||control.value>7)?{inLevels:true}:null);
  }

  playerDTO = new FormGroup ({
   name:new FormControl(this.playerDTOForService.name,Validators.required),
   surname:new FormControl(this.playerDTOForService.surname,Validators.required),
   dateOfBirth:new FormControl(this.playerDTOForService.dateOfBirth,Validators.required),
   mailAddress:new FormControl(this.playerDTOForService.mailAddress,Validators.required),
   username:new FormControl(this.playerDTOForService.username,Validators.required),
   password:new FormControl(this.playerDTOForService.password,Validators.required),
   mobile:new FormControl(this.playerDTOForService.mobile,Validators.required),
   level:new FormControl(this.playerDTOForService.level,[Validators.required, this.inLevels]),
   proPic:new FormControl(this.playerDTOForService.proPic)
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

  copyFormToDto (form:FormGroup) {
    this.playerDTOForService.name=form.controls.name.value;
    this.playerDTOForService.surname=form.controls.surname.value;
    this.playerDTOForService.dateOfBirth=form.controls.dateOfBirth.value;
    this.playerDTOForService.mailAddress=form.controls.mailAddress.value;
    this.playerDTOForService.username=form.controls.username.value;
    this.playerDTOForService.password=form.controls.password.value;
    this.playerDTOForService.mobile=form.controls.mobile.value;
    this.playerDTOForService.level=form.controls.level.value;
    this.playerDTOForService.proPic=this.cardImageBase64;
    this.playerService.update(this.playerDTOForService).subscribe((result)=>{
      this.router.navigateByUrl('/player/home', {state:{message:result.message}});
    }, (err)=> {
      this.message=err.error.message;
    })
  }

  onSubmit():void {
    this.copyFormToDto(this.playerDTO);
  }

  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.get().subscribe((result)=>{
      this.playerDTOForService=result;
    })
  }

}
