import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JoinProposal } from '../classes/JoinProposal';

@Injectable({
  providedIn: 'root'
})
export class JoinProposalService {

  findAllPending():Observable<any> {
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.joinProposalPackage+'/findAllPending');
  }

  approve(joinProposal:JoinProposal):Observable<any> {
    let params = new HttpParams()
    .set('id', joinProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.joinProposalPackage+'/approve', {params});
  }

  reject(joinProposal:JoinProposal):Observable<any> {
    let params = new HttpParams()
    .set('id', joinProposal.id.toString())
    return this.httpClient.get(environment.apiDocsBaseUrl+environment.adminApi+environment.joinProposalPackage+'/reject', {params});
  }


  constructor(private httpClient:HttpClient) { }
}
