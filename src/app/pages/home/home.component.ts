import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];

  constructor(
        private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


    getUser(): void {
      this._userService.getUser()
          .toPromise().then(
            (response: any) => {
              this.users = response;
              console.table(this.users);
            }
          );
    }
}
