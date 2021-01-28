import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewClubProposal } from '../classes/NewClubProposal';

@Injectable({
  providedIn: 'root'
})
export class NewClubProposalService {

  findAllPending():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/findAllPendingNewClubProposals/');
  }

  approve(newClubProposal:NewClubProposal) {
    let params = new HttpParams()
    .set('newClubProposalId', newClubProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/approveNewClubProposal', {params});
  }

  reject(newClubProposal:NewClubProposal) {
    let params = new HttpParams()
    .set('newClubProposalId', newClubProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/rejectNewClubProposal', {params});
  }


  constructor(private httpClient:HttpClient) { }
}
