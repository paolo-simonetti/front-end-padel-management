import { Component, OnInit } from '@angular/core';
import { JoinProposal } from 'src/app/classes/JoinProposal';
import { JoinProposalService } from 'src/app/services/join-proposal.service';

@Component({
  selector: 'app-join-proposals',
  templateUrl: './join-proposals.component.html',
  styleUrls: ['./join-proposals.component.css']
})
export class JoinProposalsComponent implements OnInit {
  joinProposals:JoinProposal[]=[];
  message:string='';

  approveProposal(joinProposal:JoinProposal) {
    this.joinProposalService.approve(joinProposal).subscribe((result)=>{
      this.message=result.toString();
      this.joinProposalService.findAllPending().subscribe((result1)=>{
        this.joinProposals=result1.message;
      });
    });
    
  }

  rejectProposal(joinProposal:JoinProposal) {
    this.joinProposalService.reject(joinProposal).subscribe((result)=>{
      this.message=result.message();
      this.joinProposalService.findAllPending().subscribe((result1)=>{
        this.joinProposals=result1.message;
      });    
  
    });
  }

  removeMessage():void {
    this.message='';
  }

  constructor(private joinProposalService:JoinProposalService) { }

  ngOnInit(): void {
    this.joinProposalService.findAllPending().subscribe((result)=>{
      this.joinProposals=result;
    });
  }

}
