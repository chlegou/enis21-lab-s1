import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate'];

  dataSource: Member[] = [];

  constructor(
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  private fetchDataSource(): void {
    this.dataSource = this.memberService.placeholderMembers;
  }

}
