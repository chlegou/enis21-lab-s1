import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public placeholderMembers: Member[] = GLOBAL._DB.members;

  constructor() { }
}
