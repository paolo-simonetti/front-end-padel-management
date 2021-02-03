import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CLOSE, DURATION_HOURS, HOURS, MINUTES, OPEN } from 'src/app/classes/Club';
import { CourtService } from 'src/app/services/court.service';

@Component({
  selector: 'app-verify-availability',
  templateUrl: './verify-availability.component.html',
  styleUrls: ['./verify-availability.component.css']
})
export class VerifyAvailabilityComponent implements OnInit {

  message:string='';
  hours:any[]=HOURS;
  minutes:number[]=MINUTES;
  durationHours:any[]=DURATION_HOURS;
  durationMinutes:number[]=MINUTES;

  dateMustBeFutureOrPresent:ValidatorFn=control=>{
    const millisecondsInput:number=Date.parse(control!.value.toString());
    const millisecondsToday:number=Date.parse(moment().format("YYYY-MM-DD"))
    return (millisecondsInput!==undefined&&millisecondsToday>=millisecondsInput?{dateMustBePast:true}:null)
  }

  moreThanAnHourAndHalfMissing:ValidatorFn=control=> {
    if (control.value!=null&&control.value!=undefined&&control!.get('date')!==null
      &&control!.get('hour')!==null && control!.get('minute')!==null) {
      let millisecondsInput:number=Date.parse(control!.get('date').value+"T"+
        control!.get('hour').value+":"+control!.get('minute').value+":00");
      const millisecondsToday:number=Date.now();
      return (millisecondsInput<millisecondsToday+90*60000?{moreThanAnHourAndHalfMissing:true}:null); 
    } else {
      return null;
    }
  }

  inHours:ValidatorFn=control=>{
    if (control.value!=null && control.value!=undefined) {
      let hour=this.hours.filter(h=>h==control.value);
      return (hour==undefined||hour.length==0?{inHours:true}:null)
    } else {
      return null;
    }
  }

  inMinutes:ValidatorFn=control=>{
    if (control.value!=null && control.value!=undefined) {
      let minute=this.minutes.filter(m=>m==control.value);
      return (minute==undefined||minute.length==0?{inMinutes:true}:null)
    } else {
      return null;
    }
  }

  inDurationHours:ValidatorFn=control=>{
    if (control.value!=null && control.value!=undefined) {
      let durationHour=this.durationHours.filter(dh=>dh==control.value);
      return (durationHour==undefined||durationHour.length==0?{inHours:true}:null)
    } else {
      return null;
    }
  }

  minimumDuration:ValidatorFn=control=>{
    return (control!.get('durationHour')!==null && control!.get('durationMinute')!=null && control!.get('hour')!.value==1 
    && control!.get('durationMinute')!.value==0?{minimumDuration:true}:null)  
  }

  maximumDuration:ValidatorFn=control=>{
    return (control!.get('durationHour')!==null && control!.get('durationMinute')!=null && 
      control!.get('hour')!==null && control!.get('minute')!==null && 
      this.isTheClubClosed(control!.get('hour').value,control!.get('minute').value,control!.get('durationHour').value,
      control!.get('durationMinute').value)?{maximumDuration:true}:null)  
  }

  isTheClubClosed(hour:number,minute:number,durationHour:number,durationMinute:number):boolean {
    let closeHour:number=hour+durationHour
    let closeMinute:number=minute+durationMinute
    return (closeHour>=CLOSE.hour||(closeHour==CLOSE.hour-1&&closeMinute==60));
  }

  isTheClubOpen:ValidatorFn=control=>{
    return (control!.get('hour')!==null && control!.get('minute')!=null && (control!.get('hour')!.value<OPEN.hour 
      ||control!.get('hour')!.value==OPEN.hour&& control!.get('durationMinute')!.value!=OPEN.minute)?{isTheClubOpen:true}:null)  
  }

  verifyAvailabilityDTO = new FormGroup ({
    date:new FormControl(new Date(), [Validators.required,this.dateMustBeFutureOrPresent]),
    hour:new FormControl(9,[Validators.required,this.inHours]),
    minute:new FormControl(0,[Validators.required,this.inMinutes]),
    durationHour:new FormControl(2,[Validators.required,this.inDurationHours]),
    durationMinute:new FormControl(0,[Validators.required,this.inMinutes])  
  }, [this.minimumDuration, this.maximumDuration, this.isTheClubOpen, this.moreThanAnHourAndHalfMissing])
  
  removeMessage():void {
    this.message='';
  } 

  onSubmit():void {
    console.log(this.verifyAvailabilityDTO.value)
    this.courtService.verifyAvailability(this.verifyAvailabilityDTO.value).subscribe((result)=>{
      this.router.navigateByUrl('/player/available-courts', {state:{
        data:result,
        dateAndTimeChosen:this.verifyAvailabilityDTO.value
      }})
    }, (err)=>{
      this.router.navigateByUrl('/player/home', {state:{message:err.error.message}})
    })
  }

  constructor(private router:Router, private courtService:CourtService) { }

  ngOnInit(): void {
  }
}
