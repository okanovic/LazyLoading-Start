import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users";
  allUsers = []
  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.allUsers = this.usersService.getUsers()

    /* gerçekleşmesi zaman alan herşey için request asenkron çalışmalı */
  }

}
