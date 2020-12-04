import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public placeholderMembers: Member[] = GLOBAL._DB.members;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAllMembers(): Promise<Member[]> {
    // return this.httpClient.get<Member[]>('linkToRestApi').toPromise();
    return new Promise(resolve => resolve(this.placeholderMembers));
  }

  getMemberById(id: string): Promise<Member> {
    // return this.httpClient.get<Member>('linkToRestApi').toPromise();
    return new Promise(resolve => resolve(
      this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    ));
  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */
  saveMember(member: any): Promise<Member> {
    // return this.httpClient.post<Member>('linkToRestApi', member).toPromise();
    const memberToSave = {
      id: member.id ?? Math.ceil(Math.random() * 10000).toString(),
      createdDate: member.createdDate ?? new Date().toISOString(), ...member
    };
    this.placeholderMembers = [memberToSave, ...this.placeholderMembers.filter(item => item.id !== member.id)];

    return new Promise(resolve => resolve(memberToSave));
  }

  removeMemberById(id: string): Promise<void> {
    // return this.httpClient.delete<void>('linkToRestApi').toPromise();
    this.placeholderMembers = this.placeholderMembers.filter(item => item.id !== id);
    return new Promise(resolve => resolve());
  }

}
