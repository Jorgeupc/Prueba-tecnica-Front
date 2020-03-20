import { Component, OnInit } from '@angular/core';
import { HourRequestService } from 'src/app/services/hour-request.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: Users
  displayedColumns : string []=[
    "id",
    "name",
    "username",
    "email"
  ]

  constructor(private service: HourRequestService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((response: Users)=>{
      this.users = response;
    })
  }

}
