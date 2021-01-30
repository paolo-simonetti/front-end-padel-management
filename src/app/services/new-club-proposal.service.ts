import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewClubProposal } from '../classes/NewClubProposal';
import { InsertNewClubProposalDTO } from '../messages/InsertNewClubProposalDTO';

@Injectable({
  providedIn: 'root'
})
export class NewClubProposalService {

  findAllPending():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/findAllPendingNewClubProposals/');
  }

  approve(newClubProposal:NewClubProposal):Observable<any> {
    let params = new HttpParams()
    .set('newClubProposalId', newClubProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/approveNewClubProposal', {params});
  }

  reject(newClubProposal:NewClubProposal):Observable<any> {
    let params = new HttpParams()
    .set('newClubProposalId', newClubProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.superAdminApi+'/rejectNewClubProposal', {params});
  }

  insert(insertNewClubProposalDTO: InsertNewClubProposalDTO):Observable<any> {
    return this.httpClient.post(environment.apiDocsBaseUrl+environment.guestApi+'/insertNewClubProposal', insertNewClubProposalDTO);
  }


  constructor(private httpClient:HttpClient) { }
}
