import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app-config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public placeholderMembers: any[] = GLOBAL._DB.members;

  constructor() { }
}
