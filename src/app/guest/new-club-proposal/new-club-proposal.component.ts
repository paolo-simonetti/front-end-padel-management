import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsertNewClubProposalDTO } from 'src/app/messages/InsertNewClubProposalDTO';
import { NewClubProposalService } from 'src/app/services/new-club-proposal.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-club-proposal',
  templateUrl: './new-club-proposal.component.html',
  styleUrls: ['./new-club-proposal.component.css']
})
export class NewClubProposalComponent implements OnInit {

  message:string='';
  imageError: string='';
  isImageSaved: boolean=false;
  cardImageBase64: string=null;
  newClubProposalDTOForService:InsertNewClubProposalDTO=new InsertNewClubProposalDTO();

  insertNewClubProposalDTO = new FormGroup ({
   name:new FormControl('',Validators.required),
   city:new FormControl('',Validators.required),
   logo:new FormControl(this.cardImageBase64)
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
    this.newClubProposalDTOForService.name=form.controls.name.value;
    this.newClubProposalDTOForService.city=form.controls.city.value;    
    this.newClubProposalDTOForService.logo=this.cardImageBase64;
    this.newClubProposalService.insert(this.newClubProposalDTOForService).subscribe((result)=>{
      this.router.navigateByUrl('/guest/home', {state:{data:result.message}});
    }, (err)=> {
      this.message="Invalid data!";
    })
  }

  onSubmit():void {
    this.copyFormToDto(this.insertNewClubProposalDTO);
  }

  constructor(private router:Router, private newClubProposalService:NewClubProposalService) { }

  ngOnInit(): void {}
}
