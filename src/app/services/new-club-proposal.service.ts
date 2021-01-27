import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewClubProposal } from '../classes/NewClubProposal';

@Injectable({
  providedIn: 'root'
})
export class NewClubProposalService {

  findAllPending():Observable<any> {
    return this.httpClient.get(environment.corsApi+environment.apiDocsBaseUrl+environment.superAdminApi+'/findAllPendingNewClubProposals/');
  }

  approve(newClubProposal:NewClubProposal) {
    return this.httpClient.get(environment.corsApi+environment.apiDocsBaseUrl+environment.superAdminApi+'/approveNewClubProposal/'+newClubProposal.id);
  }

  reject(newClubProposal:NewClubProposal) {
    return this.httpClient.get(environment.corsApi+environment.apiDocsBaseUrl+environment.superAdminApi+'/rejectNewClubProposal/'+newClubProposal.id);
  }


  constructor(private httpClient:HttpClient) { }
}
