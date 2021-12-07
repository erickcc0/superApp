import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [
    {
      personas: 284,
      categoria: 'Consultores'
    },
    {
      personas: 11,
      categoria: 'Vacantes'
    },
    {
      personas: 21,
      categoria: 'T.Remoto'
    },
    {
      personas: '4%',
      categoria: 'Rotacion'
    },
    {
      personas: 37,
      categoria: 'Permisos'
    },
    {
      personas: 50,
      categoria: 'V.Acomp'
    }
  ];

  users: any = [];
  ddd: any = [];

  constructor(
        private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getDDD();
  }


    getUser(): void {
      this._userService.getUser()
          .toPromise().then(
            (response: any) => {
              this.users = response;
              console.log(this.users);
            }
          );
    }

    getDDD(): void {
      this._userService.getDDD()
        .toPromise().then(
          (response: any) => {
            this.ddd = response.exam_notes;
            console.log(this.ddd);
          }
        );
    }
}
