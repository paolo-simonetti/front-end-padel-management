import { Component, OnInit } from '@angular/core';
import { NewClubProposal } from 'src/app/classes/NewClubProposal';
import { NewClubProposalService } from 'src/app/services/new-club-proposal.service';

@Component({
  selector: 'app-new-club-proposals',
  templateUrl: './new-club-proposals.component.html',
  styleUrls: ['./new-club-proposals.component.css']
})
export class NewClubProposalsComponent implements OnInit {

  newClubProposals:NewClubProposal[]=[];
  message:string='';

  approveProposal(newClubProposal:NewClubProposal) {
    this.newClubProposalService.approve(newClubProposal).subscribe((result)=>this.message=result.toString());
    this.newClubProposalService.findAllPending().subscribe((result)=>{
      this.newClubProposals=result;
    });
  }

  rejectProposal(newClubProposal:NewClubProposal) {
    this.newClubProposalService.reject(newClubProposal).subscribe((result)=>this.message=result.toString());
    this.newClubProposalService.findAllPending().subscribe((result)=>{
      this.newClubProposals=result;
    });    
  }

  removeMessage():void {
    this.message='';
  }

  constructor(private newClubProposalService:NewClubProposalService) { }

  ngOnInit(): void {
    this.newClubProposalService.findAllPending().subscribe((result)=>{
      console.log(result)
      this.newClubProposals=result;
    });
  }

}
